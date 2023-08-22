import { GetRoleCredentialsCommand, SSOClient } from "@aws-sdk/client-sso";
import * as tokenProviders from "@aws-sdk/token-providers";
import { CredentialsProviderError } from "@smithy/property-provider";
import { getSSOTokenFromFile } from "@smithy/shared-ini-file-loader";

import { resolveSSOCredentials } from "./resolveSSOCredentials";

jest.mock("@smithy/shared-ini-file-loader");
jest.mock("@aws-sdk/client-sso");
jest.mock("@aws-sdk/token-providers", () => {
  return {
    fromSso: jest.fn(() => async () => {
      return {
        token: "mockAccessToken",
        expiration: new Date(Date.now() + 6_000_000),
      };
    }),
  };
});

describe(resolveSSOCredentials.name, () => {
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
    (getSSOTokenFromFile as jest.Mock).mockResolvedValue(mockToken);
    mockSsoSend.mockResolvedValue({ roleCredentials: mockCreds });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("throws error if getSSOTokenFromFile fails", async () => {
    const expectedError = new CredentialsProviderError(
      `The SSO session associated with this profile is invalid. ${refreshMessage}`,
      SHOULD_FAIL_CREDENTIAL_CHAIN
    );
    (getSSOTokenFromFile as jest.Mock).mockRejectedValue(new Error("error"));

    try {
      await resolveSSOCredentials(mockOptions);
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
  });

  it("uses the SSOTokenProvider if SSO Session name is present", async () => {
    await resolveSSOCredentials({
      ...mockOptions,
      ssoSession: "test-sso-session",
    });
    expect(tokenProviders.fromSso).toHaveBeenCalledWith({
      profile: undefined,
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
      (getSSOTokenFromFile as jest.Mock).mockResolvedValue(mockExpiredToken);
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
      await resolveSSOCredentials(mockOptions);
      expect(mockSsoSend).toHaveBeenCalledTimes(1);
    });

    it("creates SSO client with provided region, if client is not passed", async () => {
      const mockCustomSsoSend = jest.fn().mockResolvedValue({ roleCredentials: mockCreds });
      (SSOClient as jest.Mock).mockReturnValue({ send: mockCustomSsoSend });

      await resolveSSOCredentials({ ...mockOptions, ssoClient: undefined });
      expect(mockCustomSsoSend).toHaveBeenCalledTimes(1);
    });
  });
});
