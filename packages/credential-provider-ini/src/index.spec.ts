import { ENV_CONFIG_PATH, ENV_CREDENTIALS_PATH } from "@aws-sdk/shared-ini-file-loader";
import { Credentials } from "@aws-sdk/types";
import { join, sep } from "path";

import { AssumeRoleParams, ENV_PROFILE, fromIni } from "./";

jest.mock("fs", () => {
  interface FsModule {
    __addMatcher(toMatch: string, toReturn: string): void;
    __clearMatchers(): void;
    readFile: (path: string, encoding: string, cb: (err: Error | null, data?: string) => void) => void;
  }

  const fs: FsModule = <FsModule>jest.genMockFromModule("fs");
  const matchers = new Map<string, string>();

  function readFile(path: string, encoding: string, callback: (err: Error | null, data?: string) => void): void {
    if (matchers.has(path)) {
      callback(null, matchers.get(path));
      return;
    }

    callback(new Error("ENOENT: no such file or directory"));
  }

  fs.__addMatcher = function (toMatch: string, toReturn: string): void {
    matchers.set(toMatch, toReturn);
  };
  fs.__clearMatchers = function (): void {
    matchers.clear();
  };
  fs.readFile = readFile;

  return fs;
});
import fs from "fs";
const { __addMatcher, __clearMatchers } = fs as any;

jest.mock("os", () => {
  interface OsModule {
    homedir: () => string;
  }

  const os: OsModule = <OsModule>jest.genMockFromModule("os");
  const path = require("path");

  os.homedir = () => path.sep + path.join("home", "user");

  return os;
});
import { homedir } from "os";

const DEFAULT_CREDS = {
  accessKeyId: "AKIAIOSFODNN7EXAMPLE",
  secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  sessionToken: "sessionToken",
};

const FOO_CREDS = {
  accessKeyId: "foo",
  secretAccessKey: "bar",
  sessionToken: "baz",
};

const FIZZ_CREDS = {
  accessKeyId: "fizz",
  secretAccessKey: "buzz",
  sessionToken: "pop",
};

const envAtLoadTime: { [key: string]: string | undefined } = [
  ENV_CONFIG_PATH,
  ENV_CREDENTIALS_PATH,
  ENV_PROFILE,
  "HOME",
  "USERPROFILE",
  "HOMEPATH",
  "HOMEDRIVE",
].reduce((envState: { [key: string]: string | undefined }, varName: string) => {
  envState[varName] = process.env[varName];
  return envState;
}, {});

beforeEach(() => {
  __clearMatchers();
  Object.keys(envAtLoadTime).forEach((envKey) => {
    delete process.env[envKey];
  });
});

afterAll(() => {
  __clearMatchers();
  Object.keys(envAtLoadTime).forEach((envKey) => {
    if (envAtLoadTime[envKey] === undefined) {
      delete process.env[envKey];
    } else {
      process.env[envKey] = envAtLoadTime[envKey];
    }
  });
});

describe("fromIni", () => {
  it("should flag a lack of credentials as a non-terminal error", () => {
    return expect(fromIni()()).rejects.toMatchObject({
      message: "Profile default could not be found or parsed in shared credentials file.",
      tryNextLink: true,
    });
  });

  describe("shared credentials file", () => {
    const SIMPLE_CREDS_FILE = `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}

[foo]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim();

    const DEFAULT_PATH = join(homedir(), ".aws", "credentials");

    it("should read credentials from ~/.aws/credentials", async () => {
      __addMatcher(DEFAULT_PATH, SIMPLE_CREDS_FILE);

      expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });

    it("should read profile credentials from ~/.aws/credentials", async () => {
      __addMatcher(DEFAULT_PATH, SIMPLE_CREDS_FILE);

      expect(await fromIni({ profile: "foo" })()).toEqual(FOO_CREDS);
    });

    it(`should read the profile specified in ${ENV_PROFILE}`, async () => {
      __addMatcher(DEFAULT_PATH, SIMPLE_CREDS_FILE);
      process.env[ENV_PROFILE] = "foo";

      expect(await fromIni()()).toEqual(FOO_CREDS);
    });

    it("should read from a filepath if provided", async () => {
      const customPath = join(homedir(), ".aws", "foo");
      __addMatcher(customPath, SIMPLE_CREDS_FILE);

      expect(await fromIni({ filepath: customPath })()).toEqual(DEFAULT_CREDS);
    });

    it(`should read from a filepath specified in ${ENV_CREDENTIALS_PATH}`, async () => {
      process.env[ENV_CREDENTIALS_PATH] = join("foo", "bar", "baz");
      __addMatcher(process.env[ENV_CREDENTIALS_PATH], SIMPLE_CREDS_FILE);

      expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });

    it("should prefer a provided filepath over one specified via environment variables", async () => {
      process.env[ENV_CREDENTIALS_PATH] = join("foo", "bar", "baz");
      const customPath = join("fizz", "buzz", "pop");
      __addMatcher(
        customPath,
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      __addMatcher(
        process.env[ENV_CREDENTIALS_PATH],
        `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim()
      );

      expect(await fromIni({ filepath: customPath })()).toEqual(DEFAULT_CREDS);
    });

    it("should use $HOME when available", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      __addMatcher(`${sep}foo${sep}bar${sep}.aws${sep}credentials`, SIMPLE_CREDS_FILE);

      expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });

    it("should use $USERPROFILE when available", async () => {
      process.env.USERPROFILE = "C:\\Users\\user";
      __addMatcher(`C:\\Users\\user${sep}.aws${sep}credentials`, SIMPLE_CREDS_FILE);

      expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });

    it("should use $HOMEPATH/$HOMEDRIVE when available", async () => {
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user";
      __addMatcher(`D:\\Users\\user${sep}.aws${sep}credentials`, SIMPLE_CREDS_FILE);

      expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });

    it("should prefer $HOME to $USERPROFILE", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      process.env.USERPROFILE = "C:\\Users\\user";

      __addMatcher(
        `${sep}foo${sep}bar${sep}.aws${sep}credentials`,
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      __addMatcher(
        `C:\\Users\\user${sep}.aws${sep}credentials`,
        `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim()
      );

      expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });

    it("should prefer $USERPROFILE to $HOMEDRIVE+$HOMEPATH", async () => {
      process.env.USERPROFILE = "C:\\Users\\user";
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user2";

      __addMatcher(
        `C:\\Users\\user${sep}.aws${sep}credentials`,
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      __addMatcher(
        `D:\\Users\\user2${sep}.aws${sep}credentials`,
        `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim()
      );

      expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });

    it("should prefer $HOME to $HOMEDRIVE+$HOMEPATH", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user2";

      __addMatcher(
        `${sep}foo${sep}bar${sep}.aws${sep}credentials`,
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      __addMatcher(
        `D:\\Users\\user2${sep}.aws${sep}credentials`,
        `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim()
      );

      expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });
  });

  describe("shared config file", () => {
    const SIMPLE_CONFIG_FILE = `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}

[profile foo]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim();

    const DEFAULT_PATH = join(homedir(), ".aws", "config");

    it("should read credentials from ~/.aws/config", async () => {
      __addMatcher(DEFAULT_PATH, SIMPLE_CONFIG_FILE);

      expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });

    it("should read profile credentials from ~/.aws/config", async () => {
      __addMatcher(DEFAULT_PATH, SIMPLE_CONFIG_FILE);

      expect(await fromIni({ profile: "foo" })()).toEqual(FOO_CREDS);
    });

    it(`should read the profile specified in ${ENV_PROFILE}`, async () => {
      __addMatcher(DEFAULT_PATH, SIMPLE_CONFIG_FILE);
      process.env[ENV_PROFILE] = "foo";

      expect(await fromIni()()).toEqual(FOO_CREDS);
    });

    it("should read from a filepath if provided", async () => {
      const customPath = join(homedir(), ".aws", "foo");
      __addMatcher(customPath, SIMPLE_CONFIG_FILE);

      expect(await fromIni({ configFilepath: customPath })()).toEqual(DEFAULT_CREDS);
    });

    it(`should read from a filepath specified in ${ENV_CREDENTIALS_PATH}`, async () => {
      process.env[ENV_CONFIG_PATH] = join("foo", "bar", "baz");
      __addMatcher(process.env[ENV_CONFIG_PATH], SIMPLE_CONFIG_FILE);

      expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });

    it("should prefer a provided filepath over one specified via environment variables", async () => {
      process.env[ENV_CONFIG_PATH] = join("foo", "bar", "baz");
      const customPath = join("fizz", "buzz", "pop");
      __addMatcher(
        customPath,
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      __addMatcher(
        process.env[ENV_CONFIG_PATH],
        `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim()
      );

      expect(await fromIni({ configFilepath: customPath })()).toEqual(DEFAULT_CREDS);
    });

    it("should use $HOME when available", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      __addMatcher(`${sep}foo${sep}bar${sep}.aws${sep}config`, SIMPLE_CONFIG_FILE);

      expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });

    it("should use $USERPROFILE when available", async () => {
      process.env.USERPROFILE = "C:\\Users\\user";
      __addMatcher(`C:\\Users\\user${sep}.aws${sep}config`, SIMPLE_CONFIG_FILE);

      expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });

    it("should use $HOMEPATH/$HOMEDRIVE when available", async () => {
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user";
      __addMatcher(`D:\\Users\\user${sep}.aws${sep}config`, SIMPLE_CONFIG_FILE);

      expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });

    it("should prefer $HOME to $USERPROFILE", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      process.env.USERPROFILE = "C:\\Users\\user";

      __addMatcher(
        `${sep}foo${sep}bar${sep}.aws${sep}config`,
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      __addMatcher(
        `C:\\Users\\user${sep}.aws${sep}config`,
        `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim()
      );

      expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });

    it("should prefer $USERPROFILE to $HOMEDRIVE+$HOMEPATH", async () => {
      process.env.USERPROFILE = "C:\\Users\\user";
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user2";

      __addMatcher(
        `C:\\Users\\user${sep}.aws${sep}config`,
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      __addMatcher(
        `D:\\Users\\user2${sep}.aws${sep}config`,
        `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim()
      );

      expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });

    it("should prefer $HOME to $HOMEDRIVE+$HOMEPATH", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user2";

      __addMatcher(
        `${sep}foo${sep}bar${sep}.aws${sep}config`,
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      __addMatcher(
        `D:\\Users\\user2${sep}.aws${sep}config`,
        `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim()
      );

      expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });
  });

  describe("assume role", () => {
    it("should invoke a role assumer callback with credentials from a source profile", async () => {
      const roleArn = "arn:aws:iam::123456789:role/foo";
      const sessionName = "fooSession";
      const externalId = "externalId";
      __addMatcher(
        join(homedir(), ".aws", "credentials"),
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}

[foo]
role_arn = ${roleArn}
role_session_name = ${sessionName}
external_id = ${externalId}
source_profile = default`.trim()
      );

      const provider = fromIni({
        profile: "foo",
        roleAssumer(sourceCreds: Credentials, params: AssumeRoleParams): Promise<Credentials> {
          expect(sourceCreds).toEqual(DEFAULT_CREDS);
          expect(params.RoleArn).toEqual(roleArn);
          expect(params.RoleSessionName).toEqual(sessionName);
          expect(params.ExternalId).toEqual(externalId);

          return Promise.resolve(FOO_CREDS);
        },
      });

      expect(await provider()).toEqual(FOO_CREDS);
    });

    it("should create a role session name if none provided", async () => {
      __addMatcher(
        join(homedir(), ".aws", "credentials"),
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}

[foo]
role_arn = arn:aws:iam::123456789:role/foo
source_profile = default`.trim()
      );

      const provider = fromIni({
        profile: "foo",
        roleAssumer(sourceCreds: Credentials, params: AssumeRoleParams): Promise<Credentials> {
          expect(params.RoleSessionName).toBeDefined();

          return Promise.resolve(FOO_CREDS);
        },
      });

      expect(await provider()).toEqual(FOO_CREDS);
    });

    it("should reject the promise with a terminal error if no role assumer provided", () => {
      __addMatcher(
        join(homedir(), ".aws", "credentials"),
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}

[foo]
role_arn = arn:aws:iam::123456789:role/foo
source_profile = bar`.trim()
      );

      return expect(fromIni({ profile: "foo" })()).rejects.toMatchObject({
        message: "Profile foo requires a role to be assumed, but no role assumption callback was provided.",
        tryNextLink: false,
      });
    });

    it("should reject the promise if the source profile cannot be found", () => {
      __addMatcher(
        join(homedir(), ".aws", "credentials"),
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}

[foo]
role_arn = arn:aws:iam::123456789:role/foo
source_profile = bar`.trim()
      );

      const provider = fromIni({
        profile: "foo",
        roleAssumer: jest.fn(),
      });

      return expect(provider()).rejects.toMatchObject({
        message: "Profile bar could not be found or parsed in shared credentials file.",
        tryNextLink: true,
      });
    });

    it("should allow a profile in ~/.aws/credentials to use a source profile from ~/.aws/config", async () => {
      const roleArn = "arn:aws:iam::123456789:role/foo";

      __addMatcher(
        join(homedir(), ".aws", "credentials"),
        `
[foo]
role_arn = ${roleArn}
source_profile = bar`.trim()
      );

      __addMatcher(
        join(homedir(), ".aws", "config"),
        `
[profile bar]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      const provider = fromIni({
        profile: "foo",
        roleAssumer(sourceCreds: Credentials, params: AssumeRoleParams): Promise<Credentials> {
          expect(sourceCreds).toEqual(DEFAULT_CREDS);
          expect(params.RoleArn).toEqual(roleArn);

          return Promise.resolve(FOO_CREDS);
        },
      });

      expect(await provider()).toEqual(FOO_CREDS);
    });

    it("should allow a profile in ~/.aws/config to use a source profile from ~/.aws/credentials", async () => {
      const roleArn = "arn:aws:iam::123456789:role/foo";

      __addMatcher(
        join(homedir(), ".aws", "config"),
        `
[profile foo]
role_arn = ${roleArn}
source_profile = bar`.trim()
      );

      __addMatcher(
        join(homedir(), ".aws", "credentials"),
        `
[bar]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      const provider = fromIni({
        profile: "foo",
        roleAssumer(sourceCreds: Credentials, params: AssumeRoleParams): Promise<Credentials> {
          expect(sourceCreds).toEqual(DEFAULT_CREDS);
          expect(params.RoleArn).toEqual(roleArn);

          return Promise.resolve(FOO_CREDS);
        },
      });

      expect(await provider()).toEqual(FOO_CREDS);
    });

    it("should allow profiles to assume roles assuming roles assuming roles ad infinitum", async () => {
      const roleArnFor = (profile: string) => `arn:aws:iam::123456789:role/${profile}`;
      const roleAssumer = jest.fn();
      roleAssumer.mockReturnValue(Promise.resolve(FOO_CREDS));

      __addMatcher(
        join(homedir(), ".aws", "config"),
        `
[profile foo]
role_arn = ${roleArnFor("foo")}
source_profile = fizz

[profile bar]
role_arn = ${roleArnFor("bar")}
source_profile = buzz

[profile baz]
role_arn = ${roleArnFor("baz")}
source_profile = pop
`.trim()
      );

      __addMatcher(
        join(homedir(), ".aws", "credentials"),
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}

[fizz]
role_arn = ${roleArnFor("fizz")}
source_profile = bar

[buzz]
role_arn = ${roleArnFor("buzz")}
source_profile = baz

[pop]
role_arn = ${roleArnFor("pop")}
source_profile = default
`.trim()
      );

      expect(await fromIni({ roleAssumer, profile: "foo" })()).toEqual(FOO_CREDS);

      expect(roleAssumer.mock.calls.length).toEqual(6);
      const expectedCalls = [
        { creds: DEFAULT_CREDS, arn: roleArnFor("pop") },
        { creds: FOO_CREDS, arn: roleArnFor("baz") },
        { creds: FOO_CREDS, arn: roleArnFor("buzz") },
        { creds: FOO_CREDS, arn: roleArnFor("bar") },
        { creds: FOO_CREDS, arn: roleArnFor("fizz") },
        { creds: FOO_CREDS, arn: roleArnFor("foo") },
      ];

      for (const { creds, arn } of expectedCalls) {
        const call = <any>roleAssumer.mock.calls.shift();
        expect(call[0]).toEqual(creds);
        expect(call[1].RoleArn).toEqual(arn);
      }
    });

    it("should support assuming a role with multi-factor authentication", async () => {
      const roleArn = "arn:aws:iam::123456789:role/foo";
      const mfaSerial = "mfaSerial";
      const mfaCode = Date.now().toString(10);
      __addMatcher(
        join(homedir(), ".aws", "credentials"),
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}

[foo]
role_arn = ${roleArn}
mfa_serial = ${mfaSerial}
source_profile = default`.trim()
      );

      const provider = fromIni({
        mfaCodeProvider() {
          return Promise.resolve(mfaCode);
        },
        profile: "foo",
        roleAssumer(sourceCreds: Credentials, params: AssumeRoleParams): Promise<Credentials> {
          expect(sourceCreds).toEqual(DEFAULT_CREDS);
          expect(params.RoleArn).toEqual(roleArn);
          expect(params.SerialNumber).toEqual(mfaSerial);
          expect(params.TokenCode).toEqual(mfaCode);

          return Promise.resolve(FOO_CREDS);
        },
      });

      expect(await provider()).toEqual(FOO_CREDS);
    });

    it("should reject the promise with a terminal error if a MFA serial is present but no mfaCodeProvider was provided", () => {
      const roleArn = "arn:aws:iam::123456789:role/foo";
      const mfaSerial = "mfaSerial";
      __addMatcher(
        join(homedir(), ".aws", "credentials"),
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}

[foo]
role_arn = ${roleArn}
mfa_serial = ${mfaSerial}
source_profile = default`.trim()
      );

      const provider = fromIni({
        profile: "foo",
        roleAssumer: () => Promise.resolve(FOO_CREDS),
      });

      return expect(provider()).rejects.toMatchObject({
        message: "Profile foo requires multi-factor authentication, but no MFA code callback was provided.",
        tryNextLink: false,
      });
    });
  });

  it("should prefer credentials in ~/.aws/credentials to those in ~/.aws/config", async () => {
    __addMatcher(
      join(homedir(), ".aws", "credentials"),
      `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
    );

    __addMatcher(
      join(homedir(), ".aws", "config"),
      `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim()
    );

    expect(await fromIni()()).toEqual(DEFAULT_CREDS);
  });

  it("should reject credentials with no access key", () => {
    __addMatcher(
      join(homedir(), ".aws", "credentials"),
      `
[default]
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
        `.trim()
    );

    return expect(fromIni()()).rejects.toMatchObject({
      message: "Profile default could not be found or parsed in shared credentials file.",
      tryNextLink: true,
    });
  });

  it("should reject credentials with no secret key", () => {
    __addMatcher(
      join(homedir(), ".aws", "credentials"),
      `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
        `.trim()
    );

    return expect(fromIni()()).rejects.toMatchObject({
      message: "Profile default could not be found or parsed in shared credentials file.",
      tryNextLink: true,
    });
  });

  it("should not merge profile values together", () => {
    __addMatcher(
      join(homedir(), ".aws", "credentials"),
      `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
        `.trim()
    );

    __addMatcher(
      join(homedir(), ".aws", "config"),
      `
[default]
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
        `.trim()
    );

    return expect(fromIni()()).rejects.toMatchObject({
      message: "Profile default could not be found or parsed in shared credentials file.",
      tryNextLink: true,
    });
  });

  it("should treat a profile with static credentials and role assumption keys as an assume role profile on the first lookup", () => {
    __addMatcher(
      join(homedir(), ".aws", "credentials"),
      `
[default]
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
role_arn = foo
source_profile = foo

[foo]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}
        `.trim()
    );

    const provider = fromIni({
      roleAssumer(sourceCreds: Credentials, params: AssumeRoleParams): Promise<Credentials> {
        expect(sourceCreds).toEqual(FOO_CREDS);
        expect(params.RoleArn).toEqual("foo");

        return Promise.resolve(FIZZ_CREDS);
      },
    });

    return expect(provider()).resolves.toEqual(FIZZ_CREDS);
  });

  it("should treat a profile with static credentials and role assumption keys as a static credentials profile on subsequent links", () => {
    __addMatcher(
      join(homedir(), ".aws", "credentials"),
      `
[default]
role_arn = foo
source_profile = foo

[foo]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}
role_arn = bar
source_profile = bar

[bar]
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
        `.trim()
    );

    const provider = fromIni({
      roleAssumer(sourceCreds: Credentials, params: AssumeRoleParams): Promise<Credentials> {
        expect(sourceCreds).toEqual(FOO_CREDS);
        expect(params.RoleArn).toEqual("foo");

        return Promise.resolve(FIZZ_CREDS);
      },
    });

    return expect(provider()).resolves.toEqual(FIZZ_CREDS);
  });

  it("a profile should be able to use its own static creds to assume a role", () => {
    __addMatcher(
      join(homedir(), ".aws", "credentials"),
      `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}
role_arn = bar
source_profile = default
        `.trim()
    );

    const provider = fromIni({
      roleAssumer(sourceCreds: Credentials, params: AssumeRoleParams): Promise<Credentials> {
        expect(sourceCreds).toEqual(DEFAULT_CREDS);
        expect(params.RoleArn).toEqual("bar");

        return Promise.resolve(FOO_CREDS);
      },
    });

    return expect(provider()).resolves.toEqual(FOO_CREDS);
  });

  it("should reject credentials when profile role assumption creates a cycle", () => {
    __addMatcher(
      join(homedir(), ".aws", "credentials"),
      `
[default]
role_arn = foo
source_profile = foo

[bar]
role_arn = baz
source_profile = baz

[fizz]
role_arn = buzz
source_profile = foo
        `.trim()
    );

    __addMatcher(
      join(homedir(), ".aws", "config"),
      `
[profile foo]
role_arn = bar
source_profile = bar

[profile baz]
role_arn = fizz
source_profile = fizz
        `.trim()
    );
    const provider = fromIni({ roleAssumer: jest.fn() });

    return expect(provider()).rejects.toMatchObject({
      message:
        "Detected a cycle attempting to resolve credentials for profile default. Profiles visited: foo, bar, baz, fizz",
      tryNextLink: false,
    });
  });

  it("should not attempt to load from disk if loaded credentials are provided", async () => {
    await expect(fromIni()()).rejects.toMatchObject({
      message: "Profile default could not be found or parsed in shared credentials file.",
    });

    const params = {
      loadedConfig: Promise.resolve({
        configFile: {
          default: {
            aws_access_key_id: DEFAULT_CREDS.accessKeyId,
            aws_secret_access_key: DEFAULT_CREDS.secretAccessKey,
            aws_session_token: DEFAULT_CREDS.sessionToken,
          },
        },
        credentialsFile: {},
      }),
    };
    expect(await fromIni(params)()).toEqual(DEFAULT_CREDS);
  });
});
