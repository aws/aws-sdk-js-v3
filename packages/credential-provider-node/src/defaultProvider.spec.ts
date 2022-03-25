import { fromEnv } from "@aws-sdk/credential-provider-env";
import { fromIni } from "@aws-sdk/credential-provider-ini";
import { fromProcess } from "@aws-sdk/credential-provider-process";
import { fromSSO } from "@aws-sdk/credential-provider-sso";
import { fromTokenFile } from "@aws-sdk/credential-provider-web-identity";
import { chain, CredentialsProviderError, memoize } from "@aws-sdk/property-provider";
import { ENV_PROFILE, loadSharedConfigFiles } from "@aws-sdk/shared-ini-file-loader";

import { defaultProvider } from "./defaultProvider";
import { remoteProvider } from "./remoteProvider";

jest.mock("@aws-sdk/credential-provider-env");
jest.mock("@aws-sdk/credential-provider-imds");
jest.mock("@aws-sdk/credential-provider-ini");
jest.mock("@aws-sdk/credential-provider-process");
jest.mock("@aws-sdk/credential-provider-sso");
jest.mock("@aws-sdk/credential-provider-web-identity");
jest.mock("@aws-sdk/property-provider");
jest.mock("@aws-sdk/shared-ini-file-loader");
jest.mock("./remoteProvider");

describe(defaultProvider.name, () => {
  const mockCreds = {
    accessKeyId: "mockAccessKeyId",
    secretAccessKey: "mockSecretAccessKey",
  };

  const mockInit = {
    profile: "mockProfile",
  };

  const mockEnvFn = jest.fn();
  const mockSsoFn = jest.fn();
  const mockIniFn = jest.fn();
  const mockProcessFn = jest.fn();
  const mockTokenFileFn = jest.fn();
  const mockRemoteProviderFn = jest.fn();

  const mockChainFn = jest.fn();
  const mockMemoizeFn = jest.fn().mockResolvedValue(mockCreds);

  beforeEach(() => {
    [
      [fromEnv, mockEnvFn],
      [fromSSO, mockSsoFn],
      [fromIni, mockIniFn],
      [fromProcess, mockProcessFn],
      [fromTokenFile, mockTokenFileFn],
      [remoteProvider, mockRemoteProviderFn],
      [chain, mockChainFn],
      [memoize, mockMemoizeFn],
    ].forEach(([fromFn, mockFn]) => {
      (fromFn as jest.Mock).mockReturnValue(mockFn);
    });
  });

  afterEach(async () => {
    const errorFnIndex = (chain as jest.Mock).mock.calls[0].length;
    const errorFn = (chain as jest.Mock).mock.calls[0][errorFnIndex - 1];
    const expectedError = new CredentialsProviderError("Could not load credentials from any providers", false);
    try {
      await errorFn();
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error.toString()).toStrictEqual(expectedError.toString());
    }

    expect(memoize).toHaveBeenCalledWith(mockChainFn, expect.any(Function), expect.any(Function));

    jest.clearAllMocks();
  });

  describe("without fromEnv", () => {
    afterEach(() => {
      expect(chain).toHaveBeenCalledWith(
        mockSsoFn,
        mockIniFn,
        mockProcessFn,
        mockTokenFileFn,
        mockRemoteProviderFn,
        expect.any(Function)
      );
    });

    it("creates provider chain and memoizes it", async () => {
      const receivedCreds = await defaultProvider(mockInit)();
      expect(receivedCreds).toStrictEqual(mockCreds);

      expect(fromEnv).not.toHaveBeenCalled();
      for (const fromFn of [fromSSO, fromIni, fromProcess, fromTokenFile, remoteProvider]) {
        expect(fromFn).toHaveBeenCalledWith(mockInit);
      }

      expect(loadSharedConfigFiles).not.toHaveBeenCalled();
    });

    it(`if env['${ENV_PROFILE}'] is set`, async () => {
      const ORIGINAL_ENV = process.env;
      process.env = {
        ...ORIGINAL_ENV,
        [ENV_PROFILE]: "envProfile",
      };

      const { profile, ...mockInitWithoutProfile } = mockInit;
      const receivedCreds = await defaultProvider(mockInitWithoutProfile)();
      expect(receivedCreds).toStrictEqual(mockCreds);

      expect(fromEnv).not.toHaveBeenCalled();
      for (const fromFn of [fromSSO, fromIni, fromProcess, fromTokenFile, remoteProvider]) {
        expect(fromFn).toHaveBeenCalledWith(mockInitWithoutProfile);
      }

      process.env = ORIGINAL_ENV;
    });
  });

  it(`adds fromEnv call if profile is not available`, async () => {
    const { profile, ...mockInitWithoutProfile } = mockInit;
    const receivedCreds = await defaultProvider(mockInitWithoutProfile)();
    expect(receivedCreds).toStrictEqual(mockCreds);

    expect(fromEnv).toHaveBeenCalledTimes(1);
    for (const fromFn of [fromSSO, fromIni, fromProcess, fromTokenFile, remoteProvider]) {
      expect(fromFn).toHaveBeenCalledWith(mockInitWithoutProfile);
    }

    expect(chain).toHaveBeenCalledWith(
      mockEnvFn,
      mockSsoFn,
      mockIniFn,
      mockProcessFn,
      mockTokenFileFn,
      mockRemoteProviderFn,
      expect.any(Function)
    );
  });

  describe("memoize isExpired", () => {
    const mockDateNow = Date.now();
    beforeEach(async () => {
      jest.spyOn(Date, "now").mockReturnValueOnce(mockDateNow);
      await defaultProvider(mockInit)();
    });

    it("returns true if expiration is defined, and creds have expired", () => {
      const memoizeExpiredFn = (memoize as jest.Mock).mock.calls[0][1];
      const expiration = new Date(mockDateNow - 24 * 60 * 60 * 1000);
      expect(memoizeExpiredFn({ expiration })).toEqual(true);
    });

    it("returns true if expiration is defined, and creds expire in <5 mins", () => {
      const memoizeExpiredFn = (memoize as jest.Mock).mock.calls[0][1];
      const expiration = new Date(mockDateNow + 299 * 1000);
      expect(memoizeExpiredFn({ expiration })).toEqual(true);
    });

    it("returns false if expiration is defined, but creds expire in >5 mins", () => {
      const memoizeExpiredFn = (memoize as jest.Mock).mock.calls[0][1];
      const expiration = new Date(mockDateNow + 301 * 1000);
      expect(memoizeExpiredFn({ expiration })).toEqual(false);
    });

    it("returns false if expiration is not defined", () => {
      const memoizeExpiredFn = (memoize as jest.Mock).mock.calls[0][1];
      expect(memoizeExpiredFn({})).toEqual(false);
    });
  });

  describe("memoize requiresRefresh", () => {
    beforeEach(async () => {
      await defaultProvider(mockInit)();
    });

    it("returns true if expiration is not defined", () => {
      const memoizeRefreshFn = (memoize as jest.Mock).mock.calls[0][2];
      const expiration = Date.now();
      expect(memoizeRefreshFn({ expiration })).toEqual(true);
    });

    it("returns false if expiration is not defined", () => {
      const memoizeRefreshFn = (memoize as jest.Mock).mock.calls[0][2];
      expect(memoizeRefreshFn({})).toEqual(false);
    });
  });
});
