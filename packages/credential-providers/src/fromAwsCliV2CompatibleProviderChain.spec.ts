import { fromEnv } from "@aws-sdk/credential-provider-env";
import { fromIni } from "@aws-sdk/credential-provider-ini";
import { remoteProvider } from "@aws-sdk/credential-provider-node/src/remoteProvider";
import { fromProcess } from "@aws-sdk/credential-provider-process";
import { fromSSO } from "@aws-sdk/credential-provider-sso";
import { fromTokenFile } from "@aws-sdk/credential-provider-web-identity";
import { CredentialsProviderError } from "@smithy/property-provider";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { fromAwsCliV2CompatibleProviderChain } from "./fromAwsCliV2CompatibleProviderChain";

vi.mock("@aws-sdk/credential-provider-env");
vi.mock("@aws-sdk/credential-provider-ini");
vi.mock("@aws-sdk/credential-provider-process");
vi.mock("@aws-sdk/credential-provider-sso");
vi.mock("@aws-sdk/credential-provider-web-identity");
vi.mock("@aws-sdk/credential-provider-node/src/remoteProvider");

describe("fromAwsCliV2CompatibleProviderChain", () => {
  const mockCreds = {
    accessKeyId: "mockAccessKeyId",
    secretAccessKey: "mockSecretAccessKey",
  };

  const mockInit = {
    profile: "mockProfile",
    logger: {
      debug: vi.fn(),
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
    },
  };

  const credentials = () => {
    throw new CredentialsProviderError("test", true);
  };

  const finalCredentials = () => {
    return mockCreds;
  };

  const mockEnvFn = vi.fn().mockImplementation(() => credentials());
  const mockSsoFn = vi.fn().mockImplementation(() => credentials());
  const mockIniFn = vi.fn().mockImplementation(() => credentials());
  const mockProcessFn = vi.fn().mockImplementation(() => credentials());
  const mockTokenFileFn = vi.fn().mockImplementation(() => credentials());
  const mockRemoteProviderFn = vi.fn().mockImplementation(() => finalCredentials());

  const ORIGINAL_ENV = { ...process.env };

  beforeEach(() => {
    process.env = { ...ORIGINAL_ENV };
    delete process.env.AWS_PROFILE;
    delete process.env.AWS_ACCESS_KEY_ID;
    delete process.env.AWS_SECRET_ACCESS_KEY;

    vi.mocked(fromEnv).mockReturnValue(mockEnvFn);
    vi.mocked(fromSSO).mockReturnValue(mockSsoFn);
    vi.mocked(fromIni).mockReturnValue(mockIniFn);
    vi.mocked(fromProcess).mockReturnValue(mockProcessFn);
    vi.mocked(fromTokenFile).mockReturnValue(mockTokenFileFn);
    vi.mocked(remoteProvider).mockReturnValue(mockRemoteProviderFn);
  });

  afterEach(() => {
    vi.clearAllMocks();
    process.env = ORIGINAL_ENV;
  });

  describe("when explicit credentials are provided", () => {
    it("should return the provided credentials", async () => {
      const credentials = await fromAwsCliV2CompatibleProviderChain({
        accessKeyId: "explicitAccessKey",
        secretAccessKey: "explicitSecretKey",
      })();

      expect(credentials).toEqual({
        accessKeyId: "explicitAccessKey",
        secretAccessKey: "explicitSecretKey",
      });
    });
  });

  describe("when profile is provided", () => {
    it("should use fromIni to resolve credentials", async () => {
      await fromAwsCliV2CompatibleProviderChain({ profile: "mockProfile" })();
      expect(fromIni).toHaveBeenCalledWith({ profile: "mockProfile" });
    });
  });

  describe("credential provider chain resolution", () => {
    it("should call providers in correct order and return valid credentials", async () => {
      const provider = fromAwsCliV2CompatibleProviderChain(mockInit);

      const receivedCreds = await provider();
      expect(receivedCreds).toEqual(mockCreds);

      expect(fromEnv).toHaveBeenCalled();
      expect(fromSSO).toHaveBeenCalled();
      expect(fromIni).toHaveBeenCalledWith(mockInit);
      expect(fromProcess).toHaveBeenCalledWith(mockInit);
      expect(fromTokenFile).toHaveBeenCalledWith(mockInit);
      expect(remoteProvider).toHaveBeenCalledWith(mockInit);
    });

    it("should skip fromEnv when profile is explicitly provided", async () => {
      await fromAwsCliV2CompatibleProviderChain({ profile: "mockProfile" })();
      expect(fromEnv).not.toHaveBeenCalled();
    });

    it("should throw an error if no credentials are found", async () => {
      vi.mocked(fromEnv).mockImplementation(() => credentials());
      vi.mocked(fromSSO).mockImplementation(() => credentials());
      vi.mocked(fromIni).mockImplementation(() => credentials());
      vi.mocked(fromProcess).mockImplementation(() => credentials());
      vi.mocked(fromTokenFile).mockImplementation(() => credentials());
      vi.mocked(remoteProvider).mockImplementation(() => credentials());

      const provider = fromAwsCliV2CompatibleProviderChain(mockInit);
      await expect(provider()).rejects.toThrow("Could not load credentials from any providers");
    });
  });

  describe("when AWS_PROFILE is set in the environment", () => {
    it("should use fromIni with the environment profile", async () => {
      process.env.AWS_PROFILE = "envProfile";

      await fromAwsCliV2CompatibleProviderChain({})();

      expect(fromIni).toHaveBeenCalledWith({ profile: "envProfile" });
    });
  });

  describe("when credentials are expired or near expiration", () => {
    it("should detect expired credentials", () => {
      const expiration = new Date(Date.now() - 24 * 60 * 60 * 1000); // Expired
      expect(credentialsTreatedAsExpired({ ...mockCreds, expiration })).toBe(true);
    });

    it("should detect credentials that expire in less than 5 minutes", () => {
      const expiration = new Date(Date.now() + 299 * 1000);
      expect(credentialsTreatedAsExpired({ ...mockCreds, expiration })).toBe(true);
    });

    it("should not mark credentials as expired if expiration is more than 5 minutes away", () => {
      const expiration = new Date(Date.now() + 301 * 1000);
      expect(credentialsTreatedAsExpired({ ...mockCreds, expiration })).toBe(false);
    });

    it("should assume credentials need refresh if expiration is not set", () => {
      expect(credentialsWillNeedRefresh({ ...mockCreds })).toBe(true);
    });
  });
});
