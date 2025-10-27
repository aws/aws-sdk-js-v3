import { fromEnv } from "@aws-sdk/credential-provider-env";
import { fromIni } from "@aws-sdk/credential-provider-ini";
import { fromProcess } from "@aws-sdk/credential-provider-process";
import { fromSSO } from "@aws-sdk/credential-provider-sso";
import { fromTokenFile } from "@aws-sdk/credential-provider-web-identity";
import { CredentialsProviderError } from "@smithy/property-provider";
import { ENV_PROFILE, loadSharedConfigFiles } from "@smithy/shared-ini-file-loader";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { credentialsTreatedAsExpired, credentialsWillNeedRefresh, defaultProvider } from "./defaultProvider";
import { remoteProvider } from "./remoteProvider";

vi.mock("@aws-sdk/credential-provider-env");
vi.mock("@smithy/credential-provider-imds");
vi.mock("@aws-sdk/credential-provider-ini");
vi.mock("@aws-sdk/credential-provider-process");
vi.mock("@aws-sdk/credential-provider-sso");
vi.mock("@aws-sdk/credential-provider-web-identity");
vi.mock("@smithy/shared-ini-file-loader");
vi.mock("./remoteProvider");

describe(defaultProvider.name, () => {
  const mockCreds = {
    accessKeyId: "mockAccessKeyId",
    secretAccessKey: "mockSecretAccessKey",
  };

  const credentials = () => {
    throw new CredentialsProviderError("test", {
      tryNextLink: true,
    });
  };

  const finalCredentials = () => {
    return mockCreds;
  };

  const mockInit = {
    profile: "mockProfile",
    logger: {
      debug() {},
      info() {},
      warn() {},
      error() {},
    },
  };

  const mockEnvFn = vi.fn().mockImplementation(() => credentials());
  const mockSsoFn = vi.fn().mockImplementation(() => credentials());
  const mockIniFn = vi.fn().mockImplementation(() => credentials());
  const mockProcessFn = vi.fn().mockImplementation(() => credentials());
  const mockTokenFileFn = vi.fn().mockImplementation(() => credentials());
  const mockRemoteProviderFn = vi.fn().mockImplementation(() => finalCredentials());

  const ORIGINAL_ENV = {
    ...process.env,
  };

  beforeEach(() => {
    process.env = {
      ...ORIGINAL_ENV,
    };
    delete process.env.AWS_PROFILE;
    delete process.env.AWS_ACCESS_KEY_ID;
    delete process.env.AWS_SECRET_ACCESS_KEY;
    [
      [fromEnv, mockEnvFn],
      [fromSSO, mockSsoFn],
      [fromIni, mockIniFn],
      [fromProcess, mockProcessFn],
      [fromTokenFile, mockTokenFileFn],
      [remoteProvider, mockRemoteProviderFn],
    ].forEach(([fromFn, mockFn]) => {
      vi.mocked(fromFn).mockReturnValue(mockFn);
    });
  });

  afterEach(async () => {
    vi.clearAllMocks();
    process.env = ORIGINAL_ENV;
  });

  describe("without fromEnv", () => {
    it("creates provider chain and memoizes it", async () => {
      const provider = defaultProvider(mockInit);

      // initial call proceeds through the chain.
      {
        const receivedCreds = await provider();
        expect(receivedCreds).toEqual(mockCreds);

        expect(fromEnv).not.toHaveBeenCalled();
        expect(fromSSO).not.toHaveBeenCalled(); // skipped when direct input is not sso.
        expect(fromIni).toHaveBeenCalledWith(mockInit);
        expect(fromProcess).toHaveBeenCalledWith(mockInit);
        expect(fromTokenFile).toHaveBeenCalledWith(mockInit);
        expect(remoteProvider).toHaveBeenCalledWith(mockInit);

        expect(loadSharedConfigFiles).not.toHaveBeenCalled();
      }

      vi.clearAllMocks();

      // subsequent call does not enter the chain.
      {
        const receivedCreds = await provider();
        expect(receivedCreds).toEqual(mockCreds);

        expect(fromEnv).not.toHaveBeenCalled();
        expect(fromSSO).not.toHaveBeenCalledWith(mockInit);
        expect(fromIni).not.toHaveBeenCalledWith(mockInit);
        expect(fromProcess).not.toHaveBeenCalledWith(mockInit);
        expect(fromTokenFile).not.toHaveBeenCalledWith(mockInit);
        expect(remoteProvider).not.toHaveBeenCalledWith(mockInit);
      }
    });

    it(`if env['${ENV_PROFILE}'] is set`, async () => {
      process.env = {
        [ENV_PROFILE]: "envProfile",
      };

      const { profile, ...mockInitWithoutProfile } = mockInit;
      const receivedCreds = await defaultProvider(mockInitWithoutProfile)();
      expect(receivedCreds).toStrictEqual(mockCreds);

      expect(fromEnv).not.toHaveBeenCalled();
      for (const fromFn of [fromIni, fromProcess, fromTokenFile, remoteProvider]) {
        expect(fromFn).toHaveBeenCalledWith(mockInitWithoutProfile);
      }
      expect(fromSSO).not.toHaveBeenCalled();
    });
  });

  it(`adds fromEnv call if profile is not available`, async () => {
    const { profile, ...mockInitWithoutProfile } = mockInit;
    const receivedCreds = await defaultProvider(mockInitWithoutProfile)();
    expect(receivedCreds).toStrictEqual(mockCreds);

    expect(fromEnv).toHaveBeenCalledTimes(1);
    for (const fromFn of [fromIni, fromProcess, fromTokenFile, remoteProvider]) {
      expect(fromFn).toHaveBeenCalledWith(mockInitWithoutProfile);
    }
    expect(fromSSO).not.toHaveBeenCalled();
  });

  it("incomplete sso information should still engage the SSO provider", async () => {
    await defaultProvider({})();
    expect(fromSSO).not.toHaveBeenCalled();

    await defaultProvider({
      ssoRegion: "a-test-region",
    })();
    expect(fromSSO).toHaveBeenCalled();
  });

  describe(credentialsTreatedAsExpired.name, () => {
    const mockDateNow = Date.now();
    beforeEach(async () => {
      vi.spyOn(Date, "now").mockReturnValueOnce(mockDateNow);
    });

    it("returns true if expiration is defined, and creds have expired", () => {
      const expiration = new Date(mockDateNow - 24 * 60 * 60 * 1000);
      expect(credentialsTreatedAsExpired({ ...mockCreds, expiration })).toEqual(true);
    });

    it("returns true if expiration is defined, and creds expire in <5 mins", () => {
      const expiration = new Date(mockDateNow + 299 * 1000);
      expect(credentialsTreatedAsExpired({ ...mockCreds, expiration })).toEqual(true);
    });

    it("returns false if expiration is defined, but creds expire in >5 mins", () => {
      const expiration = new Date(mockDateNow + 301 * 1000);
      expect(credentialsTreatedAsExpired({ ...mockCreds, expiration })).toEqual(false);
    });

    it("returns false if expiration is not defined", () => {
      expect(credentialsTreatedAsExpired({ ...mockCreds })).toEqual(false);
    });
  });

  describe(credentialsWillNeedRefresh.name, () => {
    it("returns true if expiration is not defined", () => {
      const expiration = new Date();
      expect(credentialsWillNeedRefresh({ ...mockCreds, expiration })).toEqual(true);
    });

    it("returns false if expiration is not defined", () => {
      expect(credentialsWillNeedRefresh({ ...mockCreds })).toEqual(false);
    });
  });
});
