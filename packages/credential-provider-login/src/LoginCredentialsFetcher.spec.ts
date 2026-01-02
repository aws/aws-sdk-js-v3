import { CredentialsProviderError } from "@smithy/property-provider";
import { beforeEach, describe, expect, it, vi } from "vitest";

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
  SigninClient: vi.fn(() => mockClient),
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

import { createHash } from "crypto";
import { promises as fs } from "fs";
import { dirname, join } from "path";

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
    expiresAt: "3000-01-01T00:00:00.000Z",
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
