import { GetRoleCredentialsCommand, SSOClient } from "@aws-sdk/client-sso";
import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { getHomeDir } from "@aws-sdk/shared-ini-file-loader";
import { createHash } from "crypto";
import { promises } from "fs";
import { join } from "path";

import { resolveSSOCredentials } from "./resolveSSOCredentials";

jest.mock("crypto");
jest.mock("@aws-sdk/shared-ini-file-loader");
jest.mock("fs", () => ({ promises: { readFile: jest.fn() } }));
jest.mock("@aws-sdk/client-sso");

describe(resolveSSOCredentials.name, () => {
  const mockCacheName = "mockCacheName";
  const mockDigest = jest.fn().mockReturnValue(mockCacheName);
  const mockUpdate = jest.fn().mockReturnValue({ digest: mockDigest });
  const mockHomeDir = "/home/dir";

  const mockToken = {
    accessToken: "mockAccessToken",
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };

  const SHOULD_FAIL_CREDENTIAL_CHAIN = false;
  const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;

  const mockSsoSend = jest.fn();
  const mockSsoClient = { send: mockSsoSend };
  const mockOptions = {
    ssoStartUrl: "mock_sso_start_url",
    ssoAccountId: "mock_sso_account_id",
    ssoRegion: "mock_sso_region",
    ssoRoleName: "mock_sso_role_name",
    ssoClient: mockSsoClient as unknown as SSOClient,
  };

  const mockCreds = {
    accessKeyId: "mockAccessKeyId",
    secretAccessKey: "mockSecretAccessKey",
    sessionToken: "mockSessionToken",
    expiration: Date.now(),
  };

  beforeEach(() => {
    (createHash as jest.Mock).mockReturnValue({ update: mockUpdate });
    (getHomeDir as jest.Mock).mockReturnValue(mockHomeDir);
    (promises.readFile as jest.Mock).mockResolvedValue(JSON.stringify(mockToken));
    mockSsoSend.mockResolvedValue({ roleCredentials: mockCreds });
  });

  afterEach(() => {
    expect(createHash).toHaveBeenCalledWith("sha1");
    expect(mockUpdate).toHaveBeenCalledWith(mockOptions.ssoStartUrl);
    expect(mockDigest).toHaveBeenCalledWith("hex");
    expect(promises.readFile).toHaveBeenCalledWith(
      join(mockHomeDir, ".aws", "sso", "cache", `${mockCacheName}.json`),
      "utf8"
    );
    jest.clearAllMocks();
  });

  describe("throws error for invalid token", () => {
    afterEach(async () => {
      const expectedError = new CredentialsProviderError(
        `The SSO session associated with this profile is invalid. ${refreshMessage}`,
        SHOULD_FAIL_CREDENTIAL_CHAIN
      );

      try {
        await resolveSSOCredentials(mockOptions);
        fail(`expected ${expectedError}`);
      } catch (error) {
        expect(error).toStrictEqual(expectedError);
      }
    });

    it("throws error if readFile fails", async () => {
      (promises.readFile as jest.Mock).mockRejectedValue(new Error("error"));
    });

    it("throws error if token is not a valid JSON", async () => {
      (promises.readFile as jest.Mock).mockReturnValue("invalid JSON");
    });
  });

  describe("throws error on expiration", () => {
    afterEach(async () => {
      const expectedError = new CredentialsProviderError(
        `The SSO session associated with this profile has expired. ${refreshMessage}`,
        SHOULD_FAIL_CREDENTIAL_CHAIN
      );

      try {
        await resolveSSOCredentials(mockOptions);
        fail(`expected ${expectedError}`);
      } catch (error) {
        expect(error).toStrictEqual(expectedError);
      }
    });

    it("throws error if SSO session has expired", async () => {
      const mockExpiredToken = { ...mockToken, expiresAt: new Date(Date.now() - 60 * 1000).toISOString() };
      (promises.readFile as jest.Mock).mockReturnValue(JSON.stringify(mockExpiredToken));
    });

    it("throws error if SSO session expires in <15 mins", async () => {
      const mockExpiredToken = { ...mockToken, expiresAt: new Date(Date.now() + 899 * 1000).toISOString() };
      (promises.readFile as jest.Mock).mockReturnValue(JSON.stringify(mockExpiredToken));
    });
  });

  describe("throws error on sso.getRoleCredentials call", () => {
    afterEach(() => {
      expect(mockSsoSend).toHaveBeenCalledTimes(1);
      expect(GetRoleCredentialsCommand).toHaveBeenCalledWith({
        accountId: mockOptions.ssoAccountId,
        roleName: mockOptions.ssoRoleName,
        accessToken: mockToken.accessToken,
      });
    });

    it("if call fails", async () => {
      const expectedError = new Error("error from GetRoleCredentialsCommand");
      mockSsoSend.mockRejectedValue(expectedError);

      try {
        await resolveSSOCredentials(mockOptions);
        fail(`expected ${expectedError}`);
      } catch (error) {
        expect(error).toStrictEqual(CredentialsProviderError.from(expectedError, SHOULD_FAIL_CREDENTIAL_CHAIN));
      }
    });

    it.each(["accessKeyId", "secretAccessKey", "sessionToken", "expiration"])(
      "returns creds missing '%s'",
      async (key) => {
        mockSsoSend.mockResolvedValue({ roleCredentials: { ...mockCreds, [key]: undefined } });

        const expectedError = new CredentialsProviderError(
          "SSO returns an invalid temporary credential.",
          SHOULD_FAIL_CREDENTIAL_CHAIN
        );
        try {
          await resolveSSOCredentials(mockOptions);
          fail(`expected ${expectedError}`);
        } catch (error) {
          expect(error).toStrictEqual(expectedError);
        }
      }
    );
  });

  describe("returns valid credentials", () => {
    afterEach(() => {
      expect(GetRoleCredentialsCommand).toHaveBeenCalledWith({
        accountId: mockOptions.ssoAccountId,
        roleName: mockOptions.ssoRoleName,
        accessToken: mockToken.accessToken,
      });
    });

    it("returns valid credentials from sso.getRoleCredentials", async () => {
      const receivedCreds = await resolveSSOCredentials(mockOptions);
      expect(receivedCreds).toStrictEqual(receivedCreds);
      expect(mockSsoSend).toHaveBeenCalledTimes(1);
    });

    it("creates SSO client with provided region, if client is not passed", async () => {
      const mockCustomSsoSend = jest.fn().mockResolvedValue({ roleCredentials: mockCreds });
      (SSOClient as jest.Mock).mockReturnValue({ send: mockCustomSsoSend });

      const receivedCreds = await resolveSSOCredentials({ ...mockOptions, ssoClient: undefined });
      expect(receivedCreds).toStrictEqual(receivedCreds);

      expect(mockCustomSsoSend).toHaveBeenCalledTimes(1);
    });
  });
});
