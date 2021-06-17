import { readFileSync } from "fs";
jest.mock("./fromWebToken", () => ({
  fromWebToken: jest.fn().mockReturnValue(() => Promise.resolve(MOCK_CREDS)),
}));
import { fromTokenFile } from "./fromTokenFile";
import { fromWebToken } from "./fromWebToken";

const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";

import { CredentialsProviderError } from "@aws-sdk/property-provider";

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

    it(`passes values to ${fromWebToken.name}`, async () => {
      const roleAssumerWithWebIdentity = jest.fn();
      const creds = await fromTokenFile({
        roleAssumerWithWebIdentity,
      })();
      expect(creds).toEqual(MOCK_CREDS);
      expect(fromWebToken as jest.Mock).toBeCalledTimes(1);
      const webTokenInit = (fromWebToken as jest.Mock).mock.calls[0][0];
      expect(webTokenInit.webIdentityToken).toBe(mockTokenValue);
      expect(webTokenInit.roleSessionName).toBe(mockRoleSessionName);
      expect(webTokenInit.roleArn).toBe(mockRoleArn);
      expect(webTokenInit.roleAssumerWithWebIdentity).toBe(roleAssumerWithWebIdentity);
    });

    it("prefers init parameters over environmental variables", async () => {
      const roleAssumerWithWebIdentity = jest.fn();
      const init = {
        webIdentityTokenFile: "anotherTokenFile",
        roleArn: "anotherRoleArn",
        roleSessionName: "anotherRoleSessionName",
        roleAssumerWithWebIdentity,
      };
      const creds = await fromTokenFile(init)();
      expect(creds).toEqual(MOCK_CREDS);
      expect(fromWebToken as jest.Mock).toBeCalledTimes(1);
      const webTokenInit = (fromWebToken as jest.Mock).mock.calls[0][0];
      expect(webTokenInit.roleSessionName).toBe(init.roleSessionName);
      expect(webTokenInit.roleArn).toBe(init.roleArn);
      expect(webTokenInit.roleAssumerWithWebIdentity).toBe(roleAssumerWithWebIdentity);
      expect(readFileSync as jest.Mock).toBeCalledTimes(1);
      expect((readFileSync as jest.Mock).mock.calls[0][0]).toBe(init.webIdentityTokenFile);
    });

    it("throws if ENV_TOKEN_FILE read from disk failed", async () => {
      const readFileSyncError = new Error("readFileSyncError");
      (readFileSync as jest.Mock).mockImplementation(() => {
        throw readFileSyncError;
      });
      try {
        await fromTokenFile({ roleAssumerWithWebIdentity: jest.fn() })();
        fail(`Expected error to be thrown`);
      } catch (error) {
        expect(error).toEqual(readFileSyncError);
      }
      expect(readFileSync).toHaveBeenCalledTimes(1);
    });

    it("throws if web_identity_token_file read from disk failed", async () => {
      const readFileSyncError = new Error("readFileSyncError");
      (readFileSync as jest.Mock).mockImplementation(() => {
        throw readFileSyncError;
      });
      try {
        await fromTokenFile({
          webIdentityTokenFile: mockTokenFile,
          roleArn: mockRoleArn,
          roleSessionName: mockRoleSessionName,
          roleAssumerWithWebIdentity: jest.fn(),
        })();
        fail(`Expected error to be thrown`);
      } catch (error) {
        expect(error).toEqual(readFileSyncError);
      }
      expect(readFileSync).toHaveBeenCalledTimes(1);
    });

    it("throws if web_identity_token_file is not specified", async () => {
      try {
        delete process.env[ENV_TOKEN_FILE];
        await fromTokenFile()();
        fail(`Expected error to be thrown`);
      } catch (error) {
        expect(error).toBeInstanceOf(CredentialsProviderError);
        expect(error.tryNextLink).toBe(true);
      }
    });

    it("throws if role_arn is not specified", async () => {
      try {
        delete process.env[ENV_ROLE_ARN];
        await fromTokenFile()();
        fail(`Expected error to be thrown`);
      } catch (error) {
        expect(error).toBeInstanceOf(CredentialsProviderError);
        expect(error.tryNextLink).toBe(true);
      }
    });
  });
});
