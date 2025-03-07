import { CredentialsProviderError } from "@smithy/property-provider";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { fromAwsCliV2CompatibleProviderChain } from "./fromAwsCliV2CompatibleProviderChain";

describe("fromAwsCliV2CompatibleProviderChain", () => {
  const mockLogger = {
    debug: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  };

  const mockRegion = () => Promise.resolve("us-east-1");

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetModules();
  });

  it("should return static credentials when provided", async () => {
    const credentials = {
      accessKeyId: "TEST_ACCESS_KEY",
      secretAccessKey: "TEST_SECRET_KEY",
      sessionToken: "TEST_SESSION_TOKEN",
      expiration: new Date(),
    };

    const provider = fromAwsCliV2CompatibleProviderChain({
      ...credentials,
      logger: mockLogger,
    });

    const result = await provider();

    expect(result).toEqual(credentials);
    expect(mockLogger.debug).toHaveBeenCalledWith(
      expect.stringContaining("using static credentials from initialization")
    );
  });

  it("should use profile credentials when profile is specified", async () => {
    const mockFromIni = vi.fn().mockResolvedValue({
      accessKeyId: "PROFILE_ACCESS_KEY",
      secretAccessKey: "PROFILE_SECRET_KEY",
    });

    vi.mock("@aws-sdk/credential-provider-ini", () => ({
      fromIni: () => mockFromIni,
    }));

    const provider = fromAwsCliV2CompatibleProviderChain({
      profile: "test-profile",
      logger: mockLogger,
    });

    const result = await provider();

    expect(result).toEqual({
      accessKeyId: "PROFILE_ACCESS_KEY",
      secretAccessKey: "PROFILE_SECRET_KEY",
    });
    expect(mockFromIni).toHaveBeenCalled();
    expect(mockLogger.debug).toHaveBeenCalledWith(expect.stringContaining("Using fromIni with profile:test-profile"));
  });

  it("should merge caller client config with init options", async () => {
    // Initial credentials
    const credentials = {
      accessKeyId: "TEST_ACCESS_KEY",
      secretAccessKey: "TEST_SECRET_KEY",
    };

    const provider = fromAwsCliV2CompatibleProviderChain(credentials);
    const callerConfig = {
      profile: "caller-profile",
      logger: mockLogger,
      region: mockRegion,
    };

    const result = await provider({ callerClientConfig: callerConfig });

    expect(result).toEqual(credentials);
    expect(mockLogger.debug).toHaveBeenCalled();
  });

  it("should fall back to environment variables if no profile is provided", async () => {
    const mockEnvCredentials = {
      accessKeyId: "ENV_ACCESS_KEY",
      secretAccessKey: "ENV_SECRET_KEY",
    };

    const mockFromEnv = vi.fn(() => vi.fn(async () => mockEnvCredentials));

    vi.mock("@aws-sdk/credential-provider-env", () => ({
      fromEnv: mockFromEnv,
    }));

    const provider = fromAwsCliV2CompatibleProviderChain({
      logger: mockLogger,
    });

    const result = await provider();

    expect(result).toEqual(mockEnvCredentials);
    expect(mockFromEnv).toHaveBeenCalled();
    expect(mockLogger.debug).toHaveBeenCalledWith(expect.stringContaining("Using from custom credential chain"));
  });

  it("should fall back to web identity credentials when environment variables are unavailable", async () => {
    vi.mock("@aws-sdk/credential-provider-env", () => ({
      fromEnv: () => () => Promise.reject(new Error("No env credentials")),
    }));

    const mockTokenFileCredentials = {
      accessKeyId: "TOKEN_ACCESS_KEY",
      secretAccessKey: "TOKEN_SECRET_KEY",
    };

    const mockFromTokenFile = vi.fn(() => vi.fn(async () => mockTokenFileCredentials));

    vi.mock("@aws-sdk/credential-provider-web-identity", () => ({
      fromTokenFile: mockFromTokenFile,
    }));

    const provider = fromAwsCliV2CompatibleProviderChain({
      logger: mockLogger,
    });

    const result = await provider();

    expect(result).toEqual(mockTokenFileCredentials);
    expect(mockFromTokenFile).toHaveBeenCalled();
  });

  it("should fall back to SSO credentials when web identity is unavailable", async () => {
    vi.mock("@aws-sdk/credential-provider-env", () => ({
      fromEnv: () => () => Promise.reject(new Error("No env credentials")),
    }));
    vi.mock("@aws-sdk/credential-provider-web-identity", () => ({
      fromTokenFile: () => () => Promise.reject(new Error("No token file")),
    }));

    const mockSSOCredentials = {
      accessKeyId: "SSO_ACCESS_KEY",
      secretAccessKey: "SSO_SECRET_KEY",
    };

    const mockFromSSO = vi.fn(() => vi.fn(async () => mockSSOCredentials));

    vi.mock("@aws-sdk/credential-provider-sso", () => ({
      fromSSO: mockFromSSO,
    }));

    const provider = fromAwsCliV2CompatibleProviderChain({
      logger: mockLogger,
    });

    const result = await provider();

    expect(result).toEqual(mockSSOCredentials);
    expect(mockFromSSO).toHaveBeenCalled();
  });

  it("should fall back to process credentials when SSO is unavailable", async () => {
    vi.mock("@aws-sdk/credential-provider-env", () => ({
      fromEnv: () => () => Promise.reject(new Error("No env credentials")),
    }));
    vi.mock("@aws-sdk/credential-provider-web-identity", () => ({
      fromTokenFile: () => () => Promise.reject(new Error("No token file")),
    }));
    vi.mock("@aws-sdk/credential-provider-sso", () => ({
      fromSSO: () => () => Promise.reject(new Error("No SSO credentials")),
    }));

    const mockProcessCredentials = {
      accessKeyId: "PROCESS_ACCESS_KEY",
      secretAccessKey: "PROCESS_SECRET_KEY",
    };

    const mockFromProcess = vi.fn(() => vi.fn(async () => mockProcessCredentials));

    vi.mock("@aws-sdk/credential-provider-process", () => ({
      fromProcess: mockFromProcess,
    }));

    const provider = fromAwsCliV2CompatibleProviderChain({
      logger: mockLogger,
    });

    const result = await provider();

    expect(result).toEqual(mockProcessCredentials);
    expect(mockFromProcess).toHaveBeenCalled();
  });

  it("should fall back to remote credentials when process credentials are unavailable", async () => {
    vi.mock("@aws-sdk/credential-provider-env", () => ({
      fromEnv: () => () => Promise.reject(new Error("No env credentials")),
    }));
    vi.mock("@aws-sdk/credential-provider-web-identity", () => ({
      fromTokenFile: () => () => Promise.reject(new Error("No token file")),
    }));
    vi.mock("@aws-sdk/credential-provider-sso", () => ({
      fromSSO: () => () => Promise.reject(new Error("No SSO credentials")),
    }));
    vi.mock("@aws-sdk/credential-provider-process", () => ({
      fromProcess: () => () => Promise.reject(new Error("No process credentials")),
    }));

    const mockRemoteCredentials = {
      accessKeyId: "REMOTE_ACCESS_KEY",
      secretAccessKey: "REMOTE_SECRET_KEY",
    };

    const mockRemoteProvider = vi.fn(() => vi.fn(async () => mockRemoteCredentials));

    vi.mock("@aws-sdk/credential-provider-node/src/remoteProvider", () => ({
      remoteProvider: mockRemoteProvider,
    }));

    const provider = fromAwsCliV2CompatibleProviderChain({
      logger: mockLogger,
    });

    const result = await provider();

    expect(result).toEqual(mockRemoteCredentials);
    expect(mockRemoteProvider).toHaveBeenCalled();
  });

  it("should throw error when no credentials are found", async () => {
    // Mock all providers to fail
    vi.mock("@aws-sdk/credential-provider-env", () => ({
      fromEnv: () => () => Promise.reject(new Error("No env credentials")),
    }));
    vi.mock("@aws-sdk/credential-provider-web-identity", () => ({
      fromTokenFile: () => () => Promise.reject(new Error("No token file")),
    }));
    vi.mock("@aws-sdk/credential-provider-sso", () => ({
      fromSSO: () => () => Promise.reject(new Error("No SSO credentials")),
    }));
    vi.mock("@aws-sdk/credential-provider-process", () => ({
      fromProcess: () => () => Promise.reject(new Error("No process credentials")),
    }));
    vi.mock("@aws-sdk/credential-provider-node/src/remoteProvider", () => ({
      remoteProvider: () => () => Promise.reject(new Error("No remote credentials")),
    }));

    const provider = fromAwsCliV2CompatibleProviderChain({
      logger: mockLogger,
    });

    await expect(provider()).rejects.toThrow(CredentialsProviderError);
    await expect(provider()).rejects.toThrow("Could not load credentials from any providers");
  });
});
