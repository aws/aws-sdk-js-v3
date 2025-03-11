import { CredentialsProviderError } from "@smithy/property-provider";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { fromAwsCliV2CompatibleProviderChain } from "./fromAwsCliV2CompatibleProviderChain";

describe("fromAwsCliV2CompatibleProviderChain", () => {
  let mockFromIni: any;
  let mockFromEnv: any;
  let mockFromTokenFile: any;
  let mockFromSSO: any;
  let mockFromProcess: any;
  let mockRemoteProvider: any;

  const mockLogger = {
    debug: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules();

    mockFromIni = vi.fn(() =>
      vi.fn(async () => ({
        accessKeyId: "PROFILE_ACCESS_KEY",
        secretAccessKey: "PROFILE_SECRET_KEY",
      }))
    );
    vi.doMock("@aws-sdk/credential-provider-ini", () => ({
      fromIni: mockFromIni,
    }));

    mockFromEnv = vi.fn(async () => ({
      accessKeyId: "ENV_ACCESS_KEY",
      secretAccessKey: "ENV_SECRET_KEY",
    }));
    vi.doMock("@aws-sdk/credential-provider-env", () => ({
      fromEnv: () => mockFromEnv,
    }));
    mockFromEnv = vi.fn(async () => {
      return {
        accessKeyId: "ENV_ACCESS_KEY",
        secretAccessKey: "ENV_SECRET_KEY",
      };
    });
    vi.doMock("@aws-sdk/credential-provider-env", () => ({
      fromEnv: () => mockFromEnv,
    }));

    mockFromTokenFile = vi.fn(async () => {
      return {
        accessKeyId: "TOKEN_ACCESS_KEY",
        secretAccessKey: "TOKEN_SECRET_KEY",
      };
    });
    vi.doMock("@aws-sdk/credential-provider-web-identity", () => ({
      fromTokenFile: () => mockFromTokenFile,
    }));

    mockFromSSO = vi.fn(async () => {
      return {
        accessKeyId: "SSO_ACCESS_KEY",
        secretAccessKey: "SSO_SECRET_KEY",
      };
    });
    vi.doMock("@aws-sdk/credential-provider-sso", () => ({
      fromSSO: () => mockFromSSO,
    }));

    mockFromProcess = vi.fn(async () => {
      return {
        accessKeyId: "PROCESS_ACCESS_KEY",
        secretAccessKey: "PROCESS_SECRET_KEY",
      };
    });
    vi.doMock("@aws-sdk/credential-provider-process", () => ({
      fromProcess: () => mockFromProcess,
    }));

    mockRemoteProvider = vi.fn(async () => {
      return {
        accessKeyId: "REMOTE_ACCESS_KEY",
        secretAccessKey: "REMOTE_SECRET_KEY",
      };
    });
    vi.doMock("@aws-sdk/credential-provider-node/src/remoteProvider", () => ({
      remoteProvider: () => mockRemoteProvider,
    }));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should use profile credentials when profile is specified", async () => {
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

  it("should fall back to environment variables if no profile is provided", async () => {
    const provider = fromAwsCliV2CompatibleProviderChain({
      logger: mockLogger,
    });

    const result = await provider();

    expect(result).toEqual({
      accessKeyId: "ENV_ACCESS_KEY",
      secretAccessKey: "ENV_SECRET_KEY",
    });

    expect(mockFromEnv).toHaveBeenCalled();
    expect(mockLogger.debug).toHaveBeenCalledWith(expect.stringContaining("Using from custom credential chain"));
  });

  it("should fall back to web identity credentials when environment variables are unavailable", async () => {
    vi.doMock("@aws-sdk/credential-provider-env", () => ({
      fromEnv: () => () => Promise.reject(new CredentialsProviderError("No env credentials")),
    }));

    const provider = fromAwsCliV2CompatibleProviderChain({ logger: mockLogger });

    const result = await provider();

    expect(result).toEqual({
      accessKeyId: "TOKEN_ACCESS_KEY",
      secretAccessKey: "TOKEN_SECRET_KEY",
    });

    expect(mockFromTokenFile).toHaveBeenCalled();
  });

  it("should fall back to SSO credentials when web identity is unavailable", async () => {
    vi.doMock("@aws-sdk/credential-provider-env", () => ({
      fromEnv: () => () => Promise.reject(new CredentialsProviderError("No env credentials")),
    }));
    vi.doMock("@aws-sdk/credential-provider-web-identity", () => ({
      fromTokenFile: () => () => Promise.reject(new CredentialsProviderError("No token file")),
    }));

    const provider = fromAwsCliV2CompatibleProviderChain({ logger: mockLogger });

    const result = await provider();

    expect(result).toEqual({
      accessKeyId: "SSO_ACCESS_KEY",
      secretAccessKey: "SSO_SECRET_KEY",
    });

    expect(mockFromSSO).toHaveBeenCalled();
  });

  it("should fall back to process credentials when SSO is unavailable", async () => {
    vi.doMock("@aws-sdk/credential-provider-env", () => ({
      fromEnv: () => () => Promise.reject(new CredentialsProviderError("No env credentials")),
    }));

    vi.doMock("@aws-sdk/credential-provider-ini", () => ({
      fromIni: () => () => Promise.reject(new CredentialsProviderError("No ini credentials")),
    }));

    vi.doMock("@aws-sdk/credential-provider-web-identity", () => ({
      fromTokenFile: () => () => Promise.reject(new CredentialsProviderError("No token file")),
    }));

    vi.doMock("@aws-sdk/credential-provider-sso", () => ({
      fromSSO: () => () => Promise.reject(new CredentialsProviderError("No SSO credentials")),
    }));

    mockFromProcess = vi.fn().mockResolvedValue({
      accessKeyId: "PROCESS_ACCESS_KEY",
      secretAccessKey: "PROCESS_SECRET_KEY",
    });

    vi.doMock("@aws-sdk/credential-provider-process", () => ({
      fromProcess: () => mockFromProcess,
    }));

    vi.doMock("@aws-sdk/credential-provider-node/src/remoteProvider", () => ({
      remoteProvider: () => () => Promise.reject(new CredentialsProviderError("No remote credentials")),
    }));

    const { fromAwsCliV2CompatibleProviderChain } = await import("./fromAwsCliV2CompatibleProviderChain");
    const provider = fromAwsCliV2CompatibleProviderChain({
      logger: mockLogger,
    });

    const result = await provider();

    expect(result).toEqual({
      accessKeyId: "PROCESS_ACCESS_KEY",
      secretAccessKey: "PROCESS_SECRET_KEY",
    });
    expect(mockFromProcess).toHaveBeenCalled();
  });

  it("should fall back to remote credentials when process credentials are unavailable", async () => {
    vi.doMock("@aws-sdk/credential-provider-env", () => ({
      fromEnv: () => () => Promise.reject(new CredentialsProviderError("No env credentials")),
    }));

    vi.doMock("@aws-sdk/credential-provider-ini", () => ({
      fromIni: () => () => Promise.reject(new CredentialsProviderError("No ini credentials")),
    }));

    vi.doMock("@aws-sdk/credential-provider-web-identity", () => ({
      fromTokenFile: () => () => Promise.reject(new CredentialsProviderError("No token file")),
    }));

    vi.doMock("@aws-sdk/credential-provider-sso", () => ({
      fromSSO: () => () => Promise.reject(new CredentialsProviderError("No SSO credentials")),
    }));

    vi.doMock("@aws-sdk/credential-provider-process", () => ({
      fromProcess: () => () => Promise.reject(new CredentialsProviderError("No process credentials")),
    }));

    mockRemoteProvider = vi.fn().mockResolvedValue({
      accessKeyId: "REMOTE_ACCESS_KEY",
      secretAccessKey: "REMOTE_SECRET_KEY",
    });

    vi.doMock("@aws-sdk/credential-provider-node/src/remoteProvider", () => ({
      remoteProvider: () => mockRemoteProvider,
    }));

    const { fromAwsCliV2CompatibleProviderChain } = await import("./fromAwsCliV2CompatibleProviderChain");
    const provider = fromAwsCliV2CompatibleProviderChain({
      logger: mockLogger,
    });

    const result = await provider();

    expect(result).toEqual({
      accessKeyId: "REMOTE_ACCESS_KEY",
      secretAccessKey: "REMOTE_SECRET_KEY",
    });
    expect(mockRemoteProvider).toHaveBeenCalled();
  });

  it("should throw error when no credentials are found", async () => {
    vi.doMock("@aws-sdk/credential-provider-env", () => ({
      fromEnv: () => () => Promise.reject(new CredentialsProviderError("No env credentials")),
    }));
    vi.doMock("@aws-sdk/credential-provider-web-identity", () => ({
      fromTokenFile: () => () => Promise.reject(new CredentialsProviderError("No token file")),
    }));
    vi.doMock("@aws-sdk/credential-provider-sso", () => ({
      fromSSO: () => () => Promise.reject(new CredentialsProviderError("No SSO credentials")),
    }));
    vi.doMock("@aws-sdk/credential-provider-process", () => ({
      fromProcess: () => () => Promise.reject(new CredentialsProviderError("No process credentials")),
    }));
    vi.doMock("@aws-sdk/credential-provider-node/src/remoteProvider", () => ({
      remoteProvider: () => () => Promise.reject(new CredentialsProviderError("No remote credentials")),
    }));

    const provider = fromAwsCliV2CompatibleProviderChain({ logger: mockLogger });

    await expect(provider()).rejects.toThrow(CredentialsProviderError);
    await expect(provider()).rejects.toThrow("Could not load credentials from any providers");
  });
});
