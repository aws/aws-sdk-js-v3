import { ProviderError } from "@aws-sdk/property-provider";
import { readFileSync } from "fs";

import { AssumeRoleWithWebIdentityParams, fromTokenFile, FromTokenFileInit } from "./fromTokenFile";

const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";

jest.mock("fs");

const MOCK_CREDS = {
  accessKeyId: "accessKeyId",
  secretAccessKey: "secretAccessKey",
  sessionToken: "sessionToken",
};

const mockTokenFile = "mockTokenFile";
const mockTokenValue = "exampletoken";
const mockRoleArn = "mockRoleArn";
const mockRoleSessionName = "mockRoleSessionName";

describe(fromTokenFile.name, () => {
  beforeEach(() => {
    (readFileSync as jest.Mock).mockReturnValue(mockTokenValue);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  const testRoleAssumerWithWebIdentityNotDefined = async (init: FromTokenFileInit, roleArn: string) => {
    try {
      // @ts-ignore An argument for 'init' was not provided.
      await fromTokenFile(init)();
      fail(`Expected error to be thrown`);
    } catch (error) {
      expect(error).toEqual(
        new ProviderError(
          `Role Arn '${roleArn}' needs to be assumed with web identity, but no role assumption callback was provided.`,
          false
        )
      );
    }
  };

  const testReadFileSyncError = async (init: FromTokenFileInit) => {
    const readFileSyncError = new Error("readFileSyncError");
    (readFileSync as jest.Mock).mockImplementation(() => {
      throw readFileSyncError;
    });
    try {
      await fromTokenFile(init)();
      fail(`Expected error to be thrown`);
    } catch (error) {
      expect(error).toEqual(readFileSyncError);
    }
    expect(readFileSync).toHaveBeenCalledTimes(1);
  };

  const testRoleAssumerWithWebIdentitySuccess = async (init: FromTokenFileInit) => {
    const creds = await fromTokenFile(init)();
    expect(creds).toEqual(MOCK_CREDS);
    expect(readFileSync).toHaveBeenCalledTimes(1);
    expect(readFileSync).toHaveBeenCalledWith(mockTokenFile, { encoding: "ascii" });
  };

  const testRandomValueForRoleSessionName = async (init: FromTokenFileInit) => {
    const mockDateNow = Date.now();
    const spyDateNow = jest.spyOn(Date, "now").mockReturnValueOnce(mockDateNow);

    const creds = await fromTokenFile({
      ...init,
      roleAssumerWithWebIdentity: async (params: AssumeRoleWithWebIdentityParams) => {
        expect(params.RoleSessionName).toEqual(`aws-sdk-js-session-${mockDateNow}`);
        return MOCK_CREDS;
      },
    })();
    expect(creds).toEqual(MOCK_CREDS);
    expect(spyDateNow).toHaveBeenCalledTimes(1);
  };

  describe("reads config from env", () => {
    const original_ENV_TOKEN_FILE = process.env[ENV_TOKEN_FILE];
    const original_ENV_ROLE_ARN = process.env[ENV_ROLE_ARN];
    const original_ENV_ROLE_SESSION_NAME = process.env[ENV_ROLE_SESSION_NAME];

    beforeEach(() => {
      process.env[ENV_TOKEN_FILE] = mockTokenFile;
      process.env[ENV_ROLE_ARN] = mockRoleArn;
      process.env[ENV_ROLE_SESSION_NAME] = mockRoleSessionName;
    });

    afterAll(() => {
      process.env[ENV_TOKEN_FILE] = original_ENV_TOKEN_FILE;
      process.env[ENV_ROLE_ARN] = original_ENV_ROLE_ARN;
      process.env[ENV_ROLE_SESSION_NAME] = original_ENV_ROLE_SESSION_NAME;
    });

    it("throws if roleAssumerWithWebIdentity is not defined", async () => {
      return testRoleAssumerWithWebIdentityNotDefined({}, process.env[ENV_ROLE_ARN]);
    });

    it("throws if ENV_TOKEN_FILE read from disk failed", async () => {
      return testReadFileSyncError({
        roleAssumerWithWebIdentity: async (params: AssumeRoleWithWebIdentityParams) => {
          return MOCK_CREDS;
        },
      });
    });

    it("passes values to roleAssumerWithWebIdentity", async () => {
      return testRoleAssumerWithWebIdentitySuccess({
        roleAssumerWithWebIdentity: async (params: AssumeRoleWithWebIdentityParams) => {
          expect(params.WebIdentityToken).toEqual(mockTokenValue);
          expect(params.RoleArn).toEqual(mockRoleArn);
          expect(params.RoleSessionName).toEqual(mockRoleSessionName);
          return MOCK_CREDS;
        },
      });
    });

    it("generates a random value for RoleSessionName if not available", async () => {
      delete process.env[ENV_ROLE_SESSION_NAME];
      return testRandomValueForRoleSessionName({});
    });
  });

  describe("reads config from configuration keys", () => {
    const original_ENV_TOKEN_FILE = process.env[ENV_TOKEN_FILE];
    const original_ENV_ROLE_ARN = process.env[ENV_ROLE_ARN];
    const original_ENV_ROLE_SESSION_NAME = process.env[ENV_ROLE_SESSION_NAME];

    beforeAll(() => {
      delete process.env[ENV_TOKEN_FILE];
      delete process.env[ENV_ROLE_ARN];
      delete process.env[ENV_ROLE_SESSION_NAME];
    });

    afterAll(() => {
      process.env[ENV_TOKEN_FILE] = original_ENV_TOKEN_FILE;
      process.env[ENV_ROLE_ARN] = original_ENV_ROLE_ARN;
      process.env[ENV_ROLE_SESSION_NAME] = original_ENV_ROLE_SESSION_NAME;
    });

    it("throws if roleAssumerWithWebIdentity is not defined", async () => {
      return testRoleAssumerWithWebIdentityNotDefined({ roleArn: mockRoleArn }, mockRoleArn);
    });

    it("throws if web_identity_token_file read from disk failed", async () => {
      return testReadFileSyncError({
        webIdentityTokenFile: mockTokenFile,
        roleArn: mockRoleArn,
        roleSessionName: mockRoleSessionName,
        roleAssumerWithWebIdentity: async (params: AssumeRoleWithWebIdentityParams) => {
          return MOCK_CREDS;
        },
      });
    });

    it("passes values to roleAssumerWithWebIdentity", async () => {
      return testRoleAssumerWithWebIdentitySuccess({
        webIdentityTokenFile: mockTokenFile,
        roleArn: mockRoleArn,
        roleSessionName: mockRoleSessionName,
        roleAssumerWithWebIdentity: async (params: AssumeRoleWithWebIdentityParams) => {
          expect(params.WebIdentityToken).toEqual(mockTokenValue);
          expect(params.RoleArn).toEqual(mockRoleArn);
          expect(params.RoleSessionName).toEqual(mockRoleSessionName);
          return MOCK_CREDS;
        },
      });
    });

    it("generates a random value for RoleSessionName if not available", async () => {
      return testRandomValueForRoleSessionName({ webIdentityTokenFile: mockTokenFile, roleArn: mockRoleArn });
    });
  });
});
