import { SigninClient } from "@aws-sdk/nested-clients/signin";
import { CredentialsProviderError } from "@smithy/core/config";
import { HttpRequest } from "@smithy/core/protocols";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { LoginCredentialsFetcher } from "./LoginCredentialsFetcher";

vi.mock("fs", () => ({
  promises: {
    readFile: vi.fn(),
    writeFile: vi.fn(),
    mkdir: vi.fn(),
    rename: vi.fn(),
  },
}));

vi.mock("@aws-sdk/nested-clients/signin", async () => ({
  SigninClient: vi.fn(function () {
    return mockClient;
  }),
  CreateOAuth2TokenCommand: vi.fn(),
}));

vi.mock("os", () => ({
  homedir: vi.fn(() => "/mock/home"),
}));

vi.mock("path");

vi.mock("crypto");

vi.mock("@aws-sdk/core/client", () => ({
  setCredentialFeature: vi.fn((credentials) => credentials),
}));

const mock_login_session = "arn:aws:sts::012345678910:assumed-role/Admin/admin";
const mockProfile = { login_session: mock_login_session };

import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import { dirname, join } from "node:path";

const mockReadFile = vi.mocked(fs.readFile);
const mockMkdir = vi.mocked(fs.mkdir);
const mockWriteFile = vi.mocked(fs.writeFile);
const mockClient = {
  send: vi.fn(),
  middlewareStack: {
    add: vi.fn(),
  },
};

const mockValidCreds = {
  accessToken: {
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    sessionToken: "session-token",
    accountId: "123456789012",
    expiresAt: "2026-01-01T00:00:00.000Z",
  },
  clientId: "test-client-id",
  refreshToken: "test-refresh-token",
  dpopKey: "test-dpop-key",
};

const mockExpiredCreds = {
  accessToken: {
    accessKeyId: "OLDEXPIREDKEY",
    secretAccessKey: "oldExpiredSecretKey",
    sessionToken: "oldExpiredSessionToken",
    accountId: "012345678901",
    expiresAt: "2020-01-01T00:00:00Z",
  },
  clientId: "arn:aws:signin:::devtools/same-device",
  refreshToken: "valid_refresh_token",
  dpopKey:
    "-----BEGIN EC PRIVATE KEY-----\nEXAMPLEkeyyqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg+PNauWi/ihtwHHbq\n1tgc8Vgpwx0qQlNSN38y+z0igWehRANCAAR2Ntw6BXJ1v8jb9XjzKZJ+gL5f/3Jq\nIqiH2PUGKWxoFwNlcNB83FivEXEzlTbuCQK5OezOYb3gbvHuzKkB0nDX\n-----END EC PRIVATE KEY-----",
};

describe("LoginCredentialsFetcher", () => {
  const mockDigest = vi.fn().mockReturnValue("mockedhash");
  const mockUpdate = vi.fn().mockReturnValue({ digest: mockDigest });

  beforeEach(() => {
    vi.clearAllMocks();
    mockReadFile.mockReset();
    mockClient.send.mockReset();
    delete process.env.AWS_LOGIN_CACHE_DIRECTORY;
    vi.mocked(createHash).mockReturnValue({ update: mockUpdate } as any);
    vi.mocked(join).mockImplementation((...args) => args.join("/"));
    vi.mocked(dirname).mockImplementation((path) => {
      const parts = path.split("/");
      return parts.slice(0, -1).join("/");
    });
  });

  it("should load cached credentials successfully", async () => {
    mockReadFile.mockResolvedValue(JSON.stringify(mockValidCreds));

    const mockNow = new Date("2025-12-31T00:00:00.000Z").getTime();
    vi.spyOn(Date, "now").mockReturnValue(mockNow);

    const fetcher = new LoginCredentialsFetcher(mockProfile);
    const result = await fetcher.loadCredentials();

    expect(result.accessKeyId).toBe("AKIAIOSFODNN7EXAMPLE");
    expect(result.secretAccessKey).toBe("wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY");
    expect(result.sessionToken).toBe("session-token");
    expect(result.accountId).toBe("123456789012");
  });

  it("should throw error when cache file not found", async () => {
    mockReadFile.mockRejectedValue(new Error("ENOENT: no such file or directory"));

    const fetcher = new LoginCredentialsFetcher(mockProfile);

    await expect(fetcher.loadCredentials()).rejects.toThrow(CredentialsProviderError);
  });

  it("should throw error when missing accessToken", async () => {
    const { accessToken, ...credsWithoutAccessToken } = mockValidCreds;
    mockReadFile.mockResolvedValue(JSON.stringify(credsWithoutAccessToken));

    const fetcher = new LoginCredentialsFetcher(mockProfile);
    await expect(fetcher.loadCredentials()).rejects.toThrow(CredentialsProviderError);
  });

  it("should throw error when missing refreshToken", async () => {
    const { refreshToken, ...credsWithoutRefreshToken } = mockValidCreds;
    mockReadFile.mockResolvedValue(JSON.stringify(credsWithoutRefreshToken));

    const fetcher = new LoginCredentialsFetcher(mockProfile);
    await expect(fetcher.loadCredentials()).rejects.toThrow(CredentialsProviderError);
  });

  it("should throw error when missing clientId", async () => {
    const { clientId, ...credsWithoutClientId } = mockValidCreds;
    mockReadFile.mockResolvedValue(JSON.stringify(credsWithoutClientId));

    const fetcher = new LoginCredentialsFetcher(mockProfile);
    await expect(fetcher.loadCredentials()).rejects.toThrow(CredentialsProviderError);
  });

  it("should throw error when missing dpopKey", async () => {
    const { dpopKey, ...credsWithoutDpopKey } = mockValidCreds;
    mockReadFile.mockResolvedValue(JSON.stringify(credsWithoutDpopKey));

    const fetcher = new LoginCredentialsFetcher(mockProfile);
    await expect(fetcher.loadCredentials()).rejects.toThrow(CredentialsProviderError);
  });

  it("should refresh expired credentials successfully", async () => {
    mockReadFile.mockResolvedValue(JSON.stringify(mockExpiredCreds));

    mockClient.send.mockResolvedValue({
      tokenOutput: {
        accessToken: {
          accessKeyId: "NEWREFRESHEDKEY",
          secretAccessKey: "newRefreshedSecretKey",
          sessionToken: "newRefreshedSessionToken",
          accountId: "012345678901",
        },
        refreshToken: "new_refresh_token",
        expiresIn: 900,
      },
    });

    const fetcher = new LoginCredentialsFetcher(mockProfile);

    // Mock the generateDpop method to avoid crypto operations
    vi.spyOn(fetcher as any, "generateDpop").mockResolvedValue("mock-dpop-proof");

    const result = await fetcher.loadCredentials();

    expect(result.accessKeyId).toBe("NEWREFRESHEDKEY");
    expect(result.secretAccessKey).toBe("newRefreshedSecretKey");
    expect(result.sessionToken).toBe("newRefreshedSessionToken");
    expect(result.accountId).toBe("012345678901");
    expect(mockClient.send).toHaveBeenCalled();
  });

  it("should throw error when refresh fails", async () => {
    mockReadFile.mockResolvedValue(JSON.stringify({ ...mockExpiredCreds, refreshToken: "expired_refresh_token" }));

    const error = new Error("Bad Request");
    error.name = "BadRequestException";
    mockClient.send.mockRejectedValue(error);

    const fetcher = new LoginCredentialsFetcher(mockProfile);
    await expect(fetcher.loadCredentials()).rejects.toThrow(CredentialsProviderError);
  });

  it("should throw error when refresh token is expired (400 Bad Request)", async () => {
    mockReadFile.mockResolvedValue(JSON.stringify({ ...mockExpiredCreds, refreshToken: "expired_refresh_token" }));

    // Mock 400 Bad Request error (expired refresh token)
    const badRequestError = new Error("Bad Request");
    badRequestError.name = "InvalidRequestError";
    (badRequestError as any).$metadata = { httpStatusCode: 400 };
    mockClient.send.mockRejectedValue(badRequestError);

    const fetcher = new LoginCredentialsFetcher(mockProfile);
    await expect(fetcher.loadCredentials()).rejects.toThrow(CredentialsProviderError);
  });

  it("should use default path construction", async () => {
    // No AWS_LOGIN_CACHE_DIRECTORY set
    const fetcher = new LoginCredentialsFetcher(mockProfile);
    await expect(fetcher.loadCredentials()).rejects.toThrow();

    expect(mockReadFile).toHaveBeenCalledWith("/mock/home/.aws/login/cache/mockedhash.json", "utf8");
  });

  it("should create cache directory before saving refreshed token", async () => {
    mockReadFile.mockResolvedValue(JSON.stringify(mockExpiredCreds));
    mockMkdir.mockResolvedValue(undefined);
    mockWriteFile.mockResolvedValue(undefined);

    mockClient.send.mockResolvedValue({
      tokenOutput: {
        accessToken: {
          accessKeyId: "NEWREFRESHEDKEY",
          secretAccessKey: "newRefreshedSecretKey",
          sessionToken: "newRefreshedSessionToken",
          accountId: "012345678901",
        },
        refreshToken: "new_refresh_token",
        expiresIn: 900,
      },
    });

    const fetcher = new LoginCredentialsFetcher(mockProfile);
    await fetcher.loadCredentials();

    // Verify mkdir was called to ensure directory exists
    expect(mockMkdir).toHaveBeenCalledWith("/mock/home/.aws/login/cache", { recursive: true });
  });

  it("should create custom directory when refreshing token if path is set through env var", async () => {
    process.env.AWS_LOGIN_CACHE_DIRECTORY = "/custom/cache/dir";

    mockReadFile.mockResolvedValue(JSON.stringify(mockExpiredCreds));
    mockMkdir.mockResolvedValue(undefined);
    mockClient.send.mockResolvedValue({
      tokenOutput: {
        accessToken: {
          accessKeyId: "NEWREFRESHEDKEY",
          secretAccessKey: "newRefreshedSecretKey",
          sessionToken: "newRefreshedSessionToken",
          accountId: "012345678901",
        },
        refreshToken: "new_refresh_token",
        expiresIn: 900,
      },
    });

    const fetcher = new LoginCredentialsFetcher(mockProfile);
    await fetcher.loadCredentials();

    expect(mockMkdir).toHaveBeenCalledWith("/custom/cache/dir", { recursive: true });
  });

  it("should always read token from disk", async () => {
    mockReadFile
      .mockResolvedValueOnce(JSON.stringify(mockExpiredCreds))
      .mockResolvedValueOnce(JSON.stringify(mockValidCreds));

    const fetcher = new LoginCredentialsFetcher(mockProfile);

    const firstToken = await (fetcher as any).loadToken();
    expect(firstToken.accessToken.accessKeyId).toBe("OLDEXPIREDKEY");

    const secondToken = await (fetcher as any).loadToken();
    expect(secondToken.accessToken.accessKeyId).toBe("AKIAIOSFODNN7EXAMPLE");
  });

  it("should re-read token from disk before refresh and skip API call if externally refreshed", async () => {
    const freshCreds = {
      ...mockExpiredCreds,
      accessToken: {
        ...mockExpiredCreds.accessToken,
        accessKeyId: "FRESH_KEY",
        secretAccessKey: "FRESH_SECRET",
        sessionToken: "FRESH_SESSION",
        expiresAt: "3000-01-01T00:00:00.000Z",
      },
    };

    // First read returns expired token (triggers refresh path),
    // second read returns fresh token (simulating external refresh)
    mockReadFile
      .mockResolvedValueOnce(JSON.stringify(mockExpiredCreds))
      .mockResolvedValueOnce(JSON.stringify(freshCreds));

    const fetcher = new LoginCredentialsFetcher(mockProfile);
    const result = await fetcher.loadCredentials();

    expect(result.accessKeyId).toBe("FRESH_KEY");
    expect(result.secretAccessKey).toBe("FRESH_SECRET");
    expect(result.sessionToken).toBe("FRESH_SESSION");
    // Should NOT have called the API since the re-read token was fresh
    expect(mockClient.send).not.toHaveBeenCalled();
  });

  describe("refresh region selection", () => {
    const refreshResponse = {
      tokenOutput: {
        accessToken: {
          accessKeyId: "NEWREFRESHEDKEY",
          secretAccessKey: "newRefreshedSecretKey",
          sessionToken: "newRefreshedSessionToken",
        },
        refreshToken: "new_refresh_token",
        expiresIn: 900,
      },
    };
    const callerClientConfig = { region: async () => "ap-southeast-1" } as any;
    const profileWithRegion = { ...mockProfile, region: "us-east-1" };
    let originalAwsRegion: string | undefined;

    beforeEach(() => {
      originalAwsRegion = process.env.AWS_REGION;
      process.env.AWS_REGION = "us-west-2";
      mockWriteFile.mockReset();
      mockWriteFile.mockResolvedValue(undefined);
      mockMkdir.mockResolvedValue(undefined);
      mockClient.send.mockResolvedValue(refreshResponse);
    });

    afterEach(() => {
      if (originalAwsRegion === undefined) {
        delete process.env.AWS_REGION;
      } else {
        process.env.AWS_REGION = originalAwsRegion;
      }
    });

    const refreshWith = async (
      token: object,
      profile: Record<string, string> = profileWithRegion,
      init?: ConstructorParameters<typeof LoginCredentialsFetcher>[1]
    ) => {
      mockReadFile.mockResolvedValue(JSON.stringify(token));
      const fetcher = new LoginCredentialsFetcher(profile, init, callerClientConfig);
      vi.spyOn(fetcher as any, "generateDpop").mockResolvedValue("mock-dpop-proof");
      const result = await fetcher.loadCredentials();
      expect(vi.mocked(SigninClient)).toHaveBeenCalledTimes(1);
      return { fetcher, result, clientConfig: vi.mocked(SigninClient).mock.calls[0][0] as any };
    };

    const writtenToken = () => JSON.parse(mockWriteFile.mock.calls[0][1] as string);

    it("should use signInRegion over profile, caller client, and AWS_REGION", async () => {
      const { clientConfig, result } = await refreshWith({ ...mockExpiredCreds, signInRegion: "eu-west-2" });
      expect(clientConfig.region).toBe("eu-west-2");
      expect(result.accessKeyId).toBe("NEWREFRESHEDKEY");
    });

    it("should keep the existing region chain when signInRegion is absent", async () => {
      const { clientConfig } = await refreshWith(mockExpiredCreds);
      expect(clientConfig.region).toBe("us-east-1");
      expect(writtenToken()).not.toHaveProperty("signInRegion");
    });

    it("should fall back to the caller client region when signInRegion is absent and the profile has none", async () => {
      const { clientConfig } = await refreshWith(mockExpiredCreds, mockProfile);
      expect(clientConfig.region).toBe("ap-southeast-1");
    });

    it.each(["", null, 123])("should treat signInRegion %j as absent", async (signInRegion) => {
      const { clientConfig } = await refreshWith({ ...mockExpiredCreds, signInRegion });
      expect(clientConfig.region).toBe("us-east-1");
    });

    it("should keep signInRegion in the saved token", async () => {
      await refreshWith({ ...mockExpiredCreds, signInRegion: "eu-west-2" });
      const saved = writtenToken();
      expect(saved.signInRegion).toBe("eu-west-2");
      expect(saved.refreshToken).toBe("new_refresh_token");
    });

    it("should load a token with signInRegion and no profile region, and refresh in that region", async () => {
      const { clientConfig } = await refreshWith({ ...mockExpiredCreds, signInRegion: "eu-west-2" }, mockProfile);
      expect(clientConfig.region).toBe("eu-west-2");
    });

    it("should use signInRegion over init.clientConfig.region", async () => {
      const { clientConfig } = await refreshWith(
        { ...mockExpiredCreds, signInRegion: "eu-west-2" },
        profileWithRegion,
        {
          clientConfig: { region: "us-gov-west-1" },
        }
      );
      expect(clientConfig.region).toBe("eu-west-2");
    });

    it("should use init.clientConfig.region when signInRegion is absent", async () => {
      const { clientConfig } = await refreshWith(mockExpiredCreds, profileWithRegion, {
        clientConfig: { region: "us-gov-west-1" },
      });
      expect(clientConfig.region).toBe("us-gov-west-1");
    });

    it("should build the DPoP htu from the resolved request endpoint", async () => {
      const { fetcher } = await refreshWith({ ...mockExpiredCreds, signInRegion: "eu-west-2" });
      const middleware = mockClient.middlewareStack.add.mock.calls[0][0];
      const next = vi.fn().mockResolvedValue({ output: {}, response: {} });
      const request = new HttpRequest({
        method: "POST",
        protocol: "https:",
        hostname: "eu-west-2.signin.aws.amazon.com",
        path: "/v1/token",
      });
      await middleware(next)({ input: {}, request });
      expect((fetcher as any).generateDpop).toHaveBeenLastCalledWith(
        "POST",
        "https://eu-west-2.signin.aws.amazon.com/v1/token"
      );
      expect(request.headers.DPoP).toBe("mock-dpop-proof");
    });
  });

  describe("DER to Raw Signature Conversion", () => {
    it("should convert valid DER signature to raw format", () => {
      const fetcher = new LoginCredentialsFetcher(mockProfile);

      // Valid DER signature: 0x30 [length] 0x02 [r-length] [r] 0x02 [s-length] [s]
      const derSignature = Buffer.from([
        0x30,
        0x44, // SEQUENCE, length 68
        0x02,
        0x20, // INTEGER, length 32 (r)
        ...Array(32).fill(0xaa), // r value (32 bytes)
        0x02,
        0x20, // INTEGER, length 32 (s)
        ...Array(32).fill(0xbb), // s value (32 bytes)
      ]);

      const rawSignature = (fetcher as any).derToRawSignature(derSignature);

      // Raw signature should be 64 bytes (32 for r + 32 for s)
      expect(rawSignature).toHaveLength(64);

      // First 32 bytes should be r
      expect(rawSignature.subarray(0, 32)).toEqual(Buffer.from(Array(32).fill(0xaa)));

      // Last 32 bytes should be s
      expect(rawSignature.subarray(32, 64)).toEqual(Buffer.from(Array(32).fill(0xbb)));
    });

    it("should throw error with invalid DER signature (missing first 0x02 marker)", () => {
      const fetcher = new LoginCredentialsFetcher(mockProfile);

      // Invalid DER signature: missing 0x02 marker for r
      const invalidDerSignature = Buffer.from([
        0x30,
        0x44, // SEQUENCE, length 68
        0x03, //  should be 0x02, not 0x03
        0x20,
        ...Array(32).fill(0xaa),
        0x02,
        0x20,
        ...Array(32).fill(0xbb),
      ]);

      expect(() => (fetcher as any).derToRawSignature(invalidDerSignature)).toThrow("Invalid DER signature");
    });

    it("should throw error with invalid DER signature (missing second 0x02 marker)", () => {
      const fetcher = new LoginCredentialsFetcher(mockProfile);

      // Invalid DER signature: missing 0x02 marker for s
      const invalidDerSignature = Buffer.from([
        0x30,
        0x44, // SEQUENCE, length 68
        0x02,
        0x20, // INTEGER marker for r
        ...Array(32).fill(0xaa),
        0x03,
        0x20, // should be 0x02, not 0x03
        ...Array(32).fill(0xbb),
      ]);

      expect(() => (fetcher as any).derToRawSignature(invalidDerSignature)).toThrow("Invalid DER signature");
    });

    it("should handle signature with leading zeros in r and s values", () => {
      const fetcher = new LoginCredentialsFetcher(mockProfile);

      // DER signature with leading zeros
      const derSignature = Buffer.from([
        0x30,
        0x46, // SEQUENCE, length 70 (extra 2 bytes for leading zeros)
        0x02,
        0x21, // INTEGER, length 33 (includes leading zero)
        0x00, // Leading zero
        ...Array(32).fill(0xaa), // r value (32 bytes)
        0x02,
        0x21, // INTEGER, length 33 (includes leading zero)
        0x00, // Leading zero
        ...Array(32).fill(0xbb), // s value (32 bytes)
      ]);

      const rawSignature = (fetcher as any).derToRawSignature(derSignature);

      // Raw signature should still be 64 bytes (leading zeros removed)
      expect(rawSignature).toHaveLength(64);

      // First 32 bytes should be r (without leading zero)
      expect(rawSignature.subarray(0, 32)).toEqual(Buffer.from(Array(32).fill(0xaa)));

      // Last 32 bytes should be s (without leading zero)
      expect(rawSignature.subarray(32, 64)).toEqual(Buffer.from(Array(32).fill(0xbb)));
    });
  });
});
