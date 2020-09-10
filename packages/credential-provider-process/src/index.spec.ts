import { ENV_CONFIG_PATH, ENV_CREDENTIALS_PATH } from "@aws-sdk/shared-ini-file-loader";
import { join, sep } from "path";

import { ENV_PROFILE, fromProcess } from "./";

jest.mock("fs", () => {
  interface FsModule {
    __addFsMatcher(toMatch: string, toReturn: string): void;
    __clearFsMatchers(): void;
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

  fs.__addFsMatcher = function (toMatch: string, toReturn: string): void {
    matchers.set(toMatch, toReturn);
  };
  fs.__clearFsMatchers = function (): void {
    matchers.clear();
  };
  fs.readFile = readFile;

  return fs;
});
import fs from "fs";
const { __addFsMatcher, __clearFsMatchers } = fs as any;

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

jest.mock("child_process", () => {
  interface ChildProcessModule {
    exec: (command: string, cb: (err: Error | null, stdout?: string) => void) => void;
    __addChildProcessMatcher(toMatch: string, toReturn: string): void;
    __clearChildProcessMatchers(): void;
  }

  const child_process = <ChildProcessModule>jest.genMockFromModule("child_process");
  const matchers = new Map<string, string>();

  function exec(command: string, callback: (err: Error | null, stdout?: string) => void): void {
    if (matchers.has(command)) {
      callback(null, matchers.get(command));
      return;
    }

    callback(new Error("ENOENT: no such file or directory"));
  }

  child_process.__addChildProcessMatcher = function (command: string, json: string): void {
    matchers.set(command, json);
  };
  child_process.__clearChildProcessMatchers = function (): void {
    matchers.clear();
  };

  child_process.exec = exec;

  return child_process;
});
import child_process from "child_process";
const { __addChildProcessMatcher, __clearChildProcessMatchers } = child_process as any;

const DEFAULT_CREDS = {
  accessKeyId: "defaultKey",
  secretAccessKey: "defaultSecret",
  sessionToken: "defaultToken",
};

const FOO_CREDS = {
  accessKeyId: "foo",
  secretAccessKey: "bar",
  sessionToken: "baz",
};

const DEFAULT_CREDS_JSON = `
{
    "AccessKeyId":"defaultKey",
    "SecretAccessKey":"defaultSecret",
    "SessionToken":"defaultToken",
    "Version":1
}`;

const FOO_CREDS_JSON = `
{
    "AccessKeyId":"foo",
    "SecretAccessKey":"bar",
    "SessionToken":"baz",
    "Version":1
}`;

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
  __clearFsMatchers();
  __clearChildProcessMatchers();
  Object.keys(envAtLoadTime).forEach((envKey) => {
    delete process.env[envKey];
  });
});

afterAll(() => {
  __clearFsMatchers();
  __clearChildProcessMatchers();
  Object.keys(envAtLoadTime).forEach((envKey) => {
    if (envAtLoadTime[envKey] === undefined) {
      delete process.env[envKey];
    } else {
      process.env[envKey] = envAtLoadTime[envKey];
    }
  });
});

describe("fromProcess", () => {
  it("should flag a lack of credentials as a non-terminal error", () => {
    return expect(fromProcess()()).rejects.toMatchObject({
      message: "Profile default could not be found in shared credentials file.",
      tryNextLink: true,
    });
  });

  describe("shared credentials file", () => {
    const SIMPLE_CREDS_FILE = `
[default]
credential_process = /cred_proc default
[foo]
credential_process = /cred_proc foo`;

    const DEFAULT_PATH = join(homedir(), ".aws", "credentials");

    it("should flag a lack of credential_process as a non-terminal error", () => {
      __addFsMatcher(
        DEFAULT_PATH,
        `
            [default]
            accessKeyId = foo
            `
      );
      return expect(fromProcess()()).rejects.toMatchObject({
        message: "Profile default did not contain credential_process.",
        tryNextLink: true,
      });
    });

    it("should flag credential_process that returns invalid JSON", () => {
      __addFsMatcher(DEFAULT_PATH, SIMPLE_CREDS_FILE);
      __addChildProcessMatcher("/cred_proc default", "BAD_JSON");

      return expect(fromProcess()()).rejects.toMatchObject({
        message: "Profile default credential_process returned invalid JSON.",
        tryNextLink: true,
      });
    });

    it("should read credentials from ~/.aws/credentials", async () => {
      __addFsMatcher(DEFAULT_PATH, SIMPLE_CREDS_FILE);
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
    });

    it("should read profile credentials from ~/.aws/credentials", async () => {
      __addFsMatcher(DEFAULT_PATH, SIMPLE_CREDS_FILE);
      __addChildProcessMatcher("/cred_proc foo", FOO_CREDS_JSON);

      expect(await fromProcess({ profile: "foo" })()).toEqual(FOO_CREDS);
    });

    it(`should read the profile specified in ${ENV_PROFILE}`, async () => {
      __addFsMatcher(DEFAULT_PATH, SIMPLE_CREDS_FILE);
      __addChildProcessMatcher("/cred_proc foo", FOO_CREDS_JSON);
      process.env[ENV_PROFILE] = "foo";

      expect(await fromProcess()()).toEqual(FOO_CREDS);
    });

    it("should read from a filepath if provided", async () => {
      const customPath = join(homedir(), ".aws", "foo");
      __addFsMatcher(customPath, SIMPLE_CREDS_FILE);
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      expect(await fromProcess({ filepath: customPath })()).toEqual(DEFAULT_CREDS);
    });

    it(`should read from a filepath specified in ${ENV_CREDENTIALS_PATH}`, async () => {
      process.env[ENV_CREDENTIALS_PATH] = join("foo", "bar", "baz");
      __addFsMatcher(process.env[ENV_CREDENTIALS_PATH], SIMPLE_CREDS_FILE);
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
    });

    it("should prefer a provided filepath over one specified via environment variables", async () => {
      process.env[ENV_CREDENTIALS_PATH] = join("foo", "bar", "baz");
      const customPath = join("fizz", "buzz", "pop");
      __addFsMatcher(
        customPath,
        `
[default]
credential_process = /cred_proc default`
      );
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      __addFsMatcher(
        process.env[ENV_CREDENTIALS_PATH],
        `
[default]
credential_process = /cred_proc foo`
      );
      __addChildProcessMatcher("/cred_proc foo", FOO_CREDS_JSON);

      expect(await fromProcess({ filepath: customPath })()).toEqual(DEFAULT_CREDS);
    });

    it("should use $HOME when available", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      __addFsMatcher(`${sep}foo${sep}bar${sep}.aws${sep}credentials`, SIMPLE_CREDS_FILE);
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
    });

    it("should use $USERPROFILE when available", async () => {
      process.env.USERPROFILE = "C:\\Users\\user";
      __addFsMatcher(`C:\\Users\\user${sep}.aws${sep}credentials`, SIMPLE_CREDS_FILE);
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
    });

    it("should use $HOMEPATH/$HOMEDRIVE when available", async () => {
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user";
      __addFsMatcher(`D:\\Users\\user${sep}.aws${sep}credentials`, SIMPLE_CREDS_FILE);
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
    });

    it("should prefer $HOME to $USERPROFILE", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      process.env.USERPROFILE = "C:\\Users\\user";

      __addFsMatcher(
        `${sep}foo${sep}bar${sep}.aws${sep}credentials`,
        `
[default]
credential_process = /cred_proc default`
      );
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      __addFsMatcher(
        `C:\\Users\\user${sep}.aws${sep}credentials`,
        `
[default]
credential_process = /cred_proc foo`
      );
      __addChildProcessMatcher("/cred_proc foo", FOO_CREDS_JSON);

      expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
    });

    it("should prefer $USERPROFILE to $HOMEDRIVE+$HOMEPATH", async () => {
      process.env.USERPROFILE = "C:\\Users\\user";
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user2";

      __addFsMatcher(
        `C:\\Users\\user${sep}.aws${sep}credentials`,
        `
[default]
credential_process = /cred_proc default`
      );
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      __addFsMatcher(
        `D:\\Users\\user2${sep}.aws${sep}credentials`,
        `
[default]
credential_process = /cred_proc foo`
      );
      __addChildProcessMatcher("/cred_proc foo", FOO_CREDS_JSON);

      expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
    });

    it("should prefer $HOME to $HOMEDRIVE+$HOMEPATH", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user2";

      __addFsMatcher(
        `${sep}foo${sep}bar${sep}.aws${sep}credentials`,
        `
[default]
credential_process = /cred_proc default`
      );
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      __addFsMatcher(
        `D:\\Users\\user2${sep}.aws${sep}credentials`,
        `
[default]
credential_process = /cred_proc foo`
      );
      __addChildProcessMatcher("/cred_proc foo", FOO_CREDS_JSON);

      expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
    });
  });

  describe("shared config file", () => {
    const SIMPLE_CONFIG_FILE = `
[default]
credential_process = /cred_proc default
[profile foo]
credential_process = /cred_proc foo`;

    const DEFAULT_PATH = join(homedir(), ".aws", "config");

    it("should read credentials from ~/.aws/config", async () => {
      __addFsMatcher(DEFAULT_PATH, SIMPLE_CONFIG_FILE);
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
    });

    it("should read profile credentials from ~/.aws/config", async () => {
      __addFsMatcher(DEFAULT_PATH, SIMPLE_CONFIG_FILE);
      __addChildProcessMatcher("/cred_proc foo", FOO_CREDS_JSON);

      expect(await fromProcess({ profile: "foo" })()).toEqual(FOO_CREDS);
    });

    it(`should read the profile specified in ${ENV_PROFILE}`, async () => {
      __addFsMatcher(DEFAULT_PATH, SIMPLE_CONFIG_FILE);
      __addChildProcessMatcher("/cred_proc foo", FOO_CREDS_JSON);

      process.env[ENV_PROFILE] = "foo";

      expect(await fromProcess()()).toEqual(FOO_CREDS);
    });

    it("should read from a filepath if provided", async () => {
      const customPath = join(homedir(), ".aws", "foo");
      __addFsMatcher(customPath, SIMPLE_CONFIG_FILE);
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      expect(await fromProcess({ configFilepath: customPath })()).toEqual(DEFAULT_CREDS);
    });

    it(`should read from a filepath specified in ${ENV_CREDENTIALS_PATH}`, async () => {
      process.env[ENV_CONFIG_PATH] = join("foo", "bar", "baz");
      __addFsMatcher(process.env[ENV_CONFIG_PATH], SIMPLE_CONFIG_FILE);
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
    });

    it("should prefer a provided filepath over one specified via environment variables", async () => {
      process.env[ENV_CONFIG_PATH] = join("foo", "bar", "baz");
      const customPath = join("fizz", "buzz", "pop");
      __addFsMatcher(
        customPath,
        `
[default]
credential_process = /cred_proc default`
      );
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      __addFsMatcher(
        process.env[ENV_CONFIG_PATH],
        `
[default]
credential_process = /cred_proc foo`
      );
      __addChildProcessMatcher("/cred_proc foo", FOO_CREDS_JSON);

      expect(await fromProcess({ configFilepath: customPath })()).toEqual(DEFAULT_CREDS);
    });

    it("should use $HOME when available", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      __addFsMatcher(`${sep}foo${sep}bar${sep}.aws${sep}config`, SIMPLE_CONFIG_FILE);
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
    });

    it("should use $USERPROFILE when available", async () => {
      process.env.USERPROFILE = "C:\\Users\\user";
      __addFsMatcher(`C:\\Users\\user${sep}.aws${sep}config`, SIMPLE_CONFIG_FILE);
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
    });

    it("should use $HOMEPATH/$HOMEDRIVE when available", async () => {
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user";
      __addFsMatcher(`D:\\Users\\user${sep}.aws${sep}config`, SIMPLE_CONFIG_FILE);
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
    });

    it("should prefer $HOME to $USERPROFILE", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      process.env.USERPROFILE = "C:\\Users\\user";

      __addFsMatcher(
        `${sep}foo${sep}bar${sep}.aws${sep}config`,
        `
[default]
credential_process = /cred_proc default`
      );
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      __addFsMatcher(
        `C:\\Users\\user${sep}.aws${sep}config`,
        `
[default]
credential_process = /cred_proc foo`
      );
      __addChildProcessMatcher("/cred_proc foo", FOO_CREDS_JSON);

      expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
    });

    it("should prefer $USERPROFILE to $HOMEDRIVE+$HOMEPATH", async () => {
      process.env.USERPROFILE = "C:\\Users\\user";
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user2";

      __addFsMatcher(
        `C:\\Users\\user${sep}.aws${sep}config`,
        `
[default]
credential_process = /cred_proc default`
      );
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      __addFsMatcher(
        `D:\\Users\\user2${sep}.aws${sep}config`,
        `
[default]
credential_process = /cred_proc foo`
      );
      __addChildProcessMatcher("/cred_proc foo", FOO_CREDS_JSON);

      expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
    });

    it("should prefer $HOME to $HOMEDRIVE+$HOMEPATH", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user2";

      __addFsMatcher(
        `${sep}foo${sep}bar${sep}.aws${sep}config`,
        `
[default]
credential_process = /cred_proc default`
      );
      __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

      __addFsMatcher(
        `D:\\Users\\user2${sep}.aws${sep}config`,
        `
[default]
credential_process = /cred_proc foo`
      );
      __addChildProcessMatcher("/cred_proc foo", FOO_CREDS_JSON);

      expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
    });
  });

  it("should prefer credentials in ~/.aws/credentials to those in ~/.aws/config", async () => {
    __addFsMatcher(
      join(homedir(), ".aws", "credentials"),
      `
[default]
credential_process = /cred_proc default`
    );
    __addChildProcessMatcher("/cred_proc default", DEFAULT_CREDS_JSON);

    __addFsMatcher(
      join(homedir(), ".aws", "config"),
      `
[default]
credential_process = /cred_proc foo`
    );
    __addChildProcessMatcher("/cred_proc foo", FOO_CREDS_JSON);

    expect(await fromProcess()()).toEqual(DEFAULT_CREDS);
  });

  it("should reject credentials with no access key", () => {
    __addFsMatcher(
      join(homedir(), ".aws", "credentials"),
      `
[default]
credential_process = /cred_proc default`
    );
    __addChildProcessMatcher(
      "/cred_proc default",
      `
{
    "SecretAccessKey":"wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    "SessionToken":"sessionToken",
    "Version":1
}`
    );

    return expect(fromProcess()()).rejects.toMatchObject({
      message: "Profile default credential_process returned invalid credentials.",
      tryNextLink: true,
    });
  });

  it("should reject credentials with no secret key", () => {
    __addFsMatcher(
      join(homedir(), ".aws", "credentials"),
      `
[default]
credential_process = /cred_proc default`
    );
    __addChildProcessMatcher(
      "/cred_proc default",
      `
{
    "AccessKeyId":"AKIAIOSFODNN7EXAMPLE",
    "SessionToken":"sessionToken",
    "Version":1
}`
    );

    return expect(fromProcess()()).rejects.toMatchObject({
      message: "Profile default credential_process returned invalid credentials.",
      tryNextLink: true,
    });
  });

  it("should reject credentials with Version !== 1", () => {
    __addFsMatcher(
      join(homedir(), ".aws", "credentials"),
      `
[default]
credential_process = /cred_proc default`
    );
    __addChildProcessMatcher(
      "/cred_proc default",
      `
{
    "AccessKeyId":"AKIAIOSFODNN7EXAMPLE",
    "SecretAccessKey":"wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    "SessionToken":"sessionToken",
    "Version":2
}`
    );

    return expect(fromProcess()()).rejects.toMatchObject({
      message: "Profile default credential_process did not return Version 1.",
      tryNextLink: true,
    });
  });

  it("should reject expired credentials", () => {
    __addFsMatcher(
      join(homedir(), ".aws", "credentials"),
      `
[default]
credential_process = /cred_proc default`
    );
    __addChildProcessMatcher(
      "/cred_proc default",
      `
{
    "AccessKeyId":"AKIAIOSFODNN7EXAMPLE",
    "SecretAccessKey":"wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    "SessionToken":"sessionToken",
    "Expiration":"1970-01-01T00:00:00.000Z",
    "Version":1
}`
    );

    return expect(fromProcess()()).rejects.toMatchObject({
      message: "Profile default credential_process returned expired credentials.",
      tryNextLink: true,
    });
  });
});
