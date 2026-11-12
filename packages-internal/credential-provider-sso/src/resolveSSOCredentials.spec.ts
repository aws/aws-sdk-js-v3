import { GetRoleCredentialsCommand, SSOClient } from "@aws-sdk/nested-clients/sso";
import * as tokenProviders from "@aws-sdk/token-providers";
import { CredentialsProviderError, getSSOTokenFromFile, TokenProviderError } from "@smithy/core/config";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { resolveSSOCredentials } from "./resolveSSOCredentials";

vi.mock("@smithy/core/config", async (importActual) => ({
  ...(await importActual<any>()),
  getSSOTokenFromFile: vi.fn(),
}));
vi.mock("@aws-sdk/nested-clients/sso");
vi.mock("@aws-sdk/token-providers", () => {
  return {
    fromSso: vi.fn(() => async () => {
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

  const mockSsoSend = vi.fn();
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
    accountId: "mock_sso_account_id",
  };

  beforeEach(() => {
    vi.mocked(getSSOTokenFromFile).mockResolvedValue(mockToken);
    mockSsoSend.mockResolvedValue({ roleCredentials: mockCreds });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("throws error if getSSOTokenFromFile fails", async () => {
    const expectedError = Object.assign(
      new CredentialsProviderError(
        `The SSO session associated with this profile is invalid. ${refreshMessage}`,
        SHOULD_FAIL_CREDENTIAL_CHAIN
      ),
      { $nonRecoverable: true }
    );
    vi.mocked(getSSOTokenFromFile).mockRejectedValue(new Error("error"));

    try {
      await resolveSSOCredentials(mockOptions);
      expect.fail(`expected ${expectedError}`);
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
      filepath: undefined,
      configFilepath: undefined,
      ignoreCache: undefined,
      clientConfig: undefined,
      parentClientConfig: undefined,
      logger: undefined,
    });
  });

  it("forwards clientConfig, parentClientConfig, and logger to the token provider", async () => {
    const mockClientConfig = {
      requestHandler: { handle: vi.fn() },
      region: "us-west-2",
    };
    const mockParentClientConfig = { logger: console };
    const mockCallerClientConfig = { region: async () => "us-east-1" };
    const mockLogger = {
      debug: vi.fn(),
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
    };

    const mockTokenProviderFn = vi.fn().mockResolvedValue({
      token: "mockAccessToken",
      expiration: new Date(Date.now() + 6_000_000),
    });
    vi.mocked(tokenProviders.fromSso).mockReturnValue(mockTokenProviderFn);

    await resolveSSOCredentials({
      ...mockOptions,
      ssoSession: "test-sso-session",
      clientConfig: mockClientConfig,
      parentClientConfig: mockParentClientConfig,
      callerClientConfig: mockCallerClientConfig,
      logger: mockLogger,
    });

    expect(tokenProviders.fromSso).toHaveBeenCalledWith(
      expect.objectContaining({
        clientConfig: mockClientConfig,
        parentClientConfig: mockParentClientConfig,
        logger: mockLogger,
      })
    );
    expect(mockTokenProviderFn).toHaveBeenCalledWith({ callerClientConfig: mockCallerClientConfig });
  });

  describe("non-recoverable failures", () => {
    it("marks UnauthorizedException from GetRoleCredentials, which means the token was rejected", async () => {
      mockSsoSend.mockRejectedValue(Object.assign(new Error("token rejected"), { name: "UnauthorizedException" }));

      const error = await resolveSSOCredentials(mockOptions).catch((e) => e);

      expect(error.$nonRecoverable).toBe(true);
    });

    it.each(["ThrottlingException", "InternalServerException"])(
      "leaves %s from GetRoleCredentials recoverable",
      async (name) => {
        mockSsoSend.mockRejectedValue(Object.assign(new Error("sso is unwell"), { name }));

        const error = await resolveSSOCredentials(mockOptions).catch((e) => e);

        expect(error.$nonRecoverable).toBeUndefined();
      }
    );

    it("marks a TokenProviderError, which means the cached token is expired, missing or malformed", async () => {
      vi.mocked(tokenProviders.fromSso).mockReturnValueOnce((async () => {
        throw new TokenProviderError("Token is expired.", false);
      }) as any);

      const error = await resolveSSOCredentials({ ...mockOptions, ssoSession: "mock_sso_session" }).catch((e) => e);

      expect(error.$nonRecoverable).toBe(true);
    });

    it("leaves a non-token failure from the SSO token provider recoverable", async () => {
      // e.g. a filesystem error reading the config files. Marking it would make the SDK raise
      // instead of falling back on cached credentials.
      vi.mocked(tokenProviders.fromSso).mockReturnValueOnce((async () => {
        throw Object.assign(new Error("EMFILE: too many open files"), { code: "EMFILE" });
      }) as any);

      const error = await resolveSSOCredentials({ ...mockOptions, ssoSession: "mock_sso_session" }).catch((e) => e);

      expect(error.$nonRecoverable).toBeUndefined();
    });
  });

  describe("throws error on expiration", () => {
    afterEach(async () => {
      const expectedError = Object.assign(
        new CredentialsProviderError(
          `The SSO session associated with this profile has expired. ${refreshMessage}`,
          SHOULD_FAIL_CREDENTIAL_CHAIN
        ),
        { $nonRecoverable: true }
      );

      try {
        await resolveSSOCredentials(mockOptions);
        expect.fail(`expected ${expectedError}`);
      } catch (error) {
        expect(error).toStrictEqual(expectedError);
      }
    });

    it("throws error if SSO session has expired", async () => {
      const mockExpiredToken = { ...mockToken, expiresAt: new Date(Date.now() - 60 * 1000).toISOString() };
      vi.mocked(getSSOTokenFromFile).mockResolvedValue(mockExpiredToken);
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
        expect.fail(`expected ${expectedError}`);
      } catch (error) {
        expect(error).toStrictEqual(
          new CredentialsProviderError(expectedError.toString(), SHOULD_FAIL_CREDENTIAL_CHAIN)
        );
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
          expect.fail(`expected ${expectedError}`);
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
      const mockCustomSsoSend = vi.fn().mockResolvedValue({ roleCredentials: mockCreds });
      vi.mocked(SSOClient).prototype.send = mockCustomSsoSend;

      await resolveSSOCredentials({ ...mockOptions, ssoClient: undefined });
      expect(mockCustomSsoSend).toHaveBeenCalledTimes(1);
    });
  });

  describe("returns valid credentials including accountId", () => {
    it("returns valid credentials with accountId from sso.getRoleCredentials", async () => {
      const result = await resolveSSOCredentials(mockOptions);
      expect(result).toHaveProperty("accountId", mockOptions.ssoAccountId);
      expect(mockSsoSend).toHaveBeenCalledTimes(1);
    });

    it("creates SSO client with provided region, if client is not passed, and includes accountId", async () => {
      const mockCustomSsoSend = vi.fn().mockResolvedValue({ roleCredentials: mockCreds });
      vi.mocked(SSOClient).prototype.send = mockCustomSsoSend;

      const result = await resolveSSOCredentials({ ...mockOptions, ssoClient: undefined });
      expect(result).toHaveProperty("accountId", mockOptions.ssoAccountId);
      expect(mockCustomSsoSend).toHaveBeenCalledTimes(1);
    });
  });
});
