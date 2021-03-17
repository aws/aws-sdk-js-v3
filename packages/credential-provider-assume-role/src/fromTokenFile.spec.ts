import { AssumeRoleCommandInput, AssumeRoleWithWebIdentityCommandInput } from "@aws-sdk/client-sts";
import { getMasterProfileName, parseKnownFiles } from "@aws-sdk/credential-provider-ini";
import { ProviderError } from "@aws-sdk/property-provider";
import { Credentials } from "@aws-sdk/types";
import { readFileSync } from "fs";

import { ENV_ROLE_ARN, ENV_ROLE_SESSION_NAME, ENV_TOKEN_FILE, fromTokenFile, FromTokenFileInit } from "./fromTokenFile";

jest.mock("fs");
jest.mock("@aws-sdk/credential-provider-ini");

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

  const testRoleAssumerWithWebIdentityNotDefined = async (errorPrefix: string) => {
    try {
      // @ts-ignore An argument for 'init' was not provided.
      await fromTokenFile({})();
      fail(`Expected error to be thrown`);
    } catch (error) {
      expect(error).toEqual(new ProviderError(`${errorPrefix}, but no role assumption callback was provided.`, false));
    }
  };

  const testReadFileSyncError = async (init: FromTokenFileInit) => {
    const readFileSyncError = new Error("readFileSyncError");
    (readFileSync as jest.Mock).mockImplementation(() => {
      throw readFileSyncError;
    });
    try {
      await fromTokenFile(init)();
      fail(`Exepcted error to be thrown`);
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

  const testRandomValueForRoleSessionName = async () => {
    const mockDateNow = Date.now();
    const spyDateNow = jest.spyOn(Date, "now").mockReturnValueOnce(mockDateNow);

    const creds = await fromTokenFile({
      roleAssumerWithWebIdentity: async (params: AssumeRoleWithWebIdentityCommandInput) => {
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
      return testRoleAssumerWithWebIdentityNotDefined(
        `Role Arn '${process.env[ENV_ROLE_ARN]}' needs to be assumed with web identity`
      );
    });

    it("throws if ENV_TOKEN_FILE read from disk failed", async () => {
      return testReadFileSyncError({
        roleAssumerWithWebIdentity: async (params: AssumeRoleWithWebIdentityCommandInput) => {
          return MOCK_CREDS;
        },
      });
    });

    it("passes values to roleAssumerWithWebIdentity", async () => {
      return testRoleAssumerWithWebIdentitySuccess({
        roleAssumerWithWebIdentity: async (params: AssumeRoleWithWebIdentityCommandInput) => {
          expect(params.WebIdentityToken).toEqual(mockTokenValue);
          expect(params.RoleArn).toEqual(mockRoleArn);
          expect(params.RoleSessionName).toEqual(mockRoleSessionName);
          return MOCK_CREDS;
        },
      });
    });

    it("generates a random value for RoleSessionName if not available", async () => {
      delete process.env[ENV_ROLE_SESSION_NAME];
      return testRandomValueForRoleSessionName();
    });
  });

  describe("reads config from shared ini", () => {
    const original_ENV_TOKEN_FILE = process.env[ENV_TOKEN_FILE];
    const masterProfileName = "masterProfileName";

    beforeAll(() => {
      delete process.env[ENV_TOKEN_FILE];
    });

    afterAll(() => {
      process.env[ENV_TOKEN_FILE] = original_ENV_TOKEN_FILE;
    });

    beforeEach(() => {
      (getMasterProfileName as jest.Mock).mockReturnValue(masterProfileName);
    });

    describe("without source_profile", () => {
      beforeEach(() => {
        (parseKnownFiles as jest.Mock).mockResolvedValue({
          [masterProfileName]: {
            web_identity_token_file: mockTokenFile,
            role_arn: mockRoleArn,
            role_session_name: mockRoleSessionName,
          },
        });
      });

      it("throws if roleAssumerWithWebIdentity is not defined", async () => {
        return testRoleAssumerWithWebIdentityNotDefined(
          `Profile '${masterProfileName}' requires a role to be assumed with web identity`
        );
      });

      it("throws if web_identity_token_file read from disk failed", async () => {
        return testReadFileSyncError({
          roleAssumerWithWebIdentity: async (params: AssumeRoleWithWebIdentityCommandInput) => {
            return MOCK_CREDS;
          },
        });
      });

      it("passes values to roleAssumerWithWebIdentity", async () => {
        return testRoleAssumerWithWebIdentitySuccess({
          roleAssumerWithWebIdentity: async (params: AssumeRoleWithWebIdentityCommandInput) => {
            expect(params.WebIdentityToken).toEqual(mockTokenValue);
            expect(params.RoleArn).toEqual(mockRoleArn);
            expect(params.RoleSessionName).toEqual(mockRoleSessionName);
            return MOCK_CREDS;
          },
        });
      });

      it("generates a random value for RoleSessionName if not available", async () => {
        (parseKnownFiles as jest.Mock).mockResolvedValue({
          [masterProfileName]: {
            web_identity_token_file: mockTokenFile,
            role_arn: mockRoleArn,
          },
        });
        return testRandomValueForRoleSessionName();
      });
    });

    describe("with source_profile", () => {
      const MOCK_SOURCE_CREDS = {
        accessKeyId: "accessKeyIdSource",
        secretAccessKey: "secretAccessKeySource",
        sessionToken: "sessionTokenSource",
      };

      const sourceProfileName = "sourceProfileName";
      const mockMasterRoleArn = "mockMasterRoleArn";
      const mockMasterRoleSessionName = "mockMasterRoleSessionName";

      beforeEach(() => {
        (parseKnownFiles as jest.Mock).mockResolvedValue({
          [sourceProfileName]: {
            web_identity_token_file: mockTokenFile,
            role_arn: mockRoleArn,
            role_session_name: mockRoleSessionName,
          },
          [masterProfileName]: {
            source_profile: sourceProfileName,
            role_arn: mockMasterRoleArn,
            role_session_name: mockMasterRoleSessionName,
          },
        });
      });

      it("throws if roleAssumer is not defined", async () => {
        try {
          // @ts-ignore An argument for 'init' was not provided.
          await fromTokenFile({})();
          fail(`Expected error to be thrown`);
        } catch (error) {
          expect(error).toEqual(
            new ProviderError(
              `Profile '${masterProfileName}' requires a role to be assumed, but no role assumption callback was provided.`,
              false
            )
          );
        }
      });

      it("throws if roleAssumerWithWebIdentity is not defined", async () => {
        try {
          // @ts-ignore An argument for 'init' was not provided.
          await fromTokenFile({
            roleAssumer: async (sourceCreds: Credentials, params: AssumeRoleCommandInput) => {
              return MOCK_CREDS;
            },
          })();
          fail(`Expected error to be thrown`);
        } catch (error) {
          expect(error).toEqual(
            new ProviderError(
              `Profile '${sourceProfileName}' requires a role to be assumed with web identity, but no role assumption callback was provided.`,
              false
            )
          );
        }
      });

      it("throws if web_identity_token_file read from disk failed", async () => {
        return testReadFileSyncError({
          roleAssumer: async (sourceCreds: Credentials, params: AssumeRoleCommandInput) => {
            return MOCK_CREDS;
          },
          roleAssumerWithWebIdentity: async (params: AssumeRoleWithWebIdentityCommandInput) => {
            return MOCK_SOURCE_CREDS;
          },
        });
      });

      it("passes values to roleAssumerWithWebIdentity", async () => {
        return testRoleAssumerWithWebIdentitySuccess({
          roleAssumer: async (sourceCreds: Credentials, params: AssumeRoleCommandInput) => {
            expect(sourceCreds).toEqual(MOCK_SOURCE_CREDS);
            expect(params.RoleArn).toEqual(mockMasterRoleArn);
            expect(params.RoleSessionName).toEqual(mockMasterRoleSessionName);
            return MOCK_CREDS;
          },
          roleAssumerWithWebIdentity: async (params: AssumeRoleWithWebIdentityCommandInput) => {
            expect(params.WebIdentityToken).toEqual(mockTokenValue);
            expect(params.RoleArn).toEqual(mockRoleArn);
            expect(params.RoleSessionName).toEqual(mockRoleSessionName);
            return MOCK_SOURCE_CREDS;
          },
        });
      });

      it("generates a random value for RoleSessionName if not available", async () => {
        (parseKnownFiles as jest.Mock).mockResolvedValue({
          [sourceProfileName]: {
            web_identity_token_file: mockTokenFile,
            role_arn: mockRoleArn,
          },
          [masterProfileName]: {
            source_profile: sourceProfileName,
            role_arn: mockMasterRoleArn,
          },
        });
        const mockDateNowFirst = Date.now();
        const mockDateNowSecond = mockDateNowFirst + 1;
        const spyDateNow = jest
          .spyOn(Date, "now")
          .mockReturnValueOnce(mockDateNowFirst)
          .mockReturnValueOnce(mockDateNowSecond);

        const creds = await fromTokenFile({
          roleAssumer: async (sourceCreds: Credentials, params: AssumeRoleCommandInput) => {
            expect(params.RoleSessionName).toEqual(`aws-sdk-js-session-${mockDateNowFirst}`);
            return MOCK_CREDS;
          },
          roleAssumerWithWebIdentity: async (params: AssumeRoleWithWebIdentityCommandInput) => {
            expect(params.RoleSessionName).toEqual(`aws-sdk-js-session-${mockDateNowSecond}`);
            return MOCK_SOURCE_CREDS;
          },
        })();
        expect(creds).toEqual(MOCK_CREDS);
        expect(spyDateNow).toHaveBeenCalledTimes(2);
      });
    });
  });
});
