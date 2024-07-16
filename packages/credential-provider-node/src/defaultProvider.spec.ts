import { fromEnv } from "@aws-sdk/credential-provider-env";
import { fromIni } from "@aws-sdk/credential-provider-ini";
import { fromProcess } from "@aws-sdk/credential-provider-process";
import { fromSSO } from "@aws-sdk/credential-provider-sso";
import { fromTokenFile } from "@aws-sdk/credential-provider-web-identity";
import { CredentialsProviderError } from "@smithy/property-provider";
import { ENV_PROFILE, loadSharedConfigFiles } from "@smithy/shared-ini-file-loader";

import { credentialsTreatedAsExpired, credentialsWillNeedRefresh, defaultProvider } from "./defaultProvider";
import { remoteProvider } from "./remoteProvider";

jest.mock("@aws-sdk/credential-provider-env");
jest.mock("@smithy/credential-provider-imds");
jest.mock("@aws-sdk/credential-provider-ini");
jest.mock("@aws-sdk/credential-provider-process");
jest.mock("@aws-sdk/credential-provider-sso");
jest.mock("@aws-sdk/credential-provider-web-identity");
jest.mock("@smithy/shared-ini-file-loader");
jest.mock("./remoteProvider");

describe(defaultProvider.name, () => {
  const mockCreds = {
    accessKeyId: "mockAccessKeyId",
    secretAccessKey: "mockSecretAccessKey",
  };

  const credentials = () => {
    throw new CredentialsProviderError("test", true);
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

  const mockEnvFn = jest.fn().mockImplementation(() => credentials());
  const mockSsoFn = jest.fn().mockImplementation(() => credentials());
  const mockIniFn = jest.fn().mockImplementation(() => credentials());
  const mockProcessFn = jest.fn().mockImplementation(() => credentials());
  const mockTokenFileFn = jest.fn().mockImplementation(() => credentials());
  const mockRemoteProviderFn = jest.fn().mockImplementation(() => finalCredentials());

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
      (fromFn as jest.Mock).mockReturnValue(mockFn);
    });
  });

  afterEach(async () => {
    jest.clearAllMocks();
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

      jest.clearAllMocks();

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
      jest.spyOn(Date, "now").mockReturnValueOnce(mockDateNow);
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
