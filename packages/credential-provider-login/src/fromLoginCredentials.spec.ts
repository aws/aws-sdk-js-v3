import { CredentialsProviderError } from "@smithy/property-provider";
import { getProfileName, parseKnownFiles } from "@smithy/shared-ini-file-loader";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { fromLoginCredentials } from "./fromLoginCredentials";
import { LoginCredentialsFetcher } from "./LoginCredentialsFetcher";

vi.mock("@smithy/shared-ini-file-loader");
vi.mock("./LoginCredentialsFetcher");

describe("fromLoginCredentials", () => {
  const mockParseKnownFiles = vi.mocked(parseKnownFiles);
  const mockGetProfileName = vi.mocked(getProfileName);
  const mockLoginCredentialsFetcher = vi.mocked(LoginCredentialsFetcher);

  const mockCreds = {
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    sessionToken: "session-token",
    accountId: "012345678901",
    expiration: new Date("2025-09-14T04:05:45Z"),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return credentials when profile has login_session", async () => {
    mockParseKnownFiles.mockResolvedValue({
      signin: { login_session: "arn:aws:sts::012345678910:assumed-role/Admin/admin" },
    });
    mockGetProfileName.mockReturnValue("signin");

    const mockFetcher = {
      loadCredentials: vi.fn().mockResolvedValue(mockCreds),
    };
    mockLoginCredentialsFetcher.mockImplementation(() => mockFetcher as any);

    const provider = fromLoginCredentials({ profile: "signin" });
    const result = await provider();

    expect(result.accessKeyId).toBe("AKIAIOSFODNN7EXAMPLE");
    expect(result.secretAccessKey).toBe("wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY");
    expect(result.sessionToken).toBe("session-token");
    expect(mockFetcher.loadCredentials).toHaveBeenCalled();
  });

  it("should throw error when profile does not contain login_session", async () => {
    mockParseKnownFiles.mockResolvedValue({
      default: { region: "us-east-1" },
    });
    mockGetProfileName.mockReturnValue("default");

    const provider = fromLoginCredentials({ profile: "default" });

    await expect(provider()).rejects.toThrow(
      new CredentialsProviderError("Profile default does not contain login_session.", {
        tryNextLink: true,
      })
    );
  });

  it("should use profile specified in the provider if given", async () => {
    mockParseKnownFiles.mockResolvedValue({
      dev: { login_session: "arn:aws:sts::012345678910:assumed-role/Admin/admin" },
    });
    mockGetProfileName.mockReturnValue("dev");

    const mockFetcher = {
      loadCredentials: vi.fn().mockResolvedValue(mockCreds),
    };
    mockLoginCredentialsFetcher.mockImplementation(() => mockFetcher as any);

    const provider = fromLoginCredentials({ profile: "dev" });
    await provider();

    expect(mockGetProfileName).toHaveBeenCalledWith({
      profile: "dev",
    });
  });

  it("should set credential feature id for login credentials", async () => {
    mockParseKnownFiles.mockResolvedValue({
      signin: { login_session: "arn:aws:sts::012345678910:assumed-role/Admin/admin" },
    });
    mockGetProfileName.mockReturnValue("signin");

    const mockFetcher = {
      loadCredentials: vi.fn().mockResolvedValue(mockCreds),
    };
    mockLoginCredentialsFetcher.mockImplementation(() => mockFetcher as any);

    const provider = fromLoginCredentials({ profile: "signin" });
    const result = await provider();

    expect(result).toStrictEqual({
      accessKeyId: "AKIAIOSFODNN7EXAMPLE",
      secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
      sessionToken: "session-token",
      accountId: "012345678901",
      expiration: new Date("2025-09-14T04:05:45Z"),
      $source: {
        CREDENTIALS_LOGIN: "AD",
      },
    });
  });

  it("should pass SharedConfigInit options to parseKnownFiles", async () => {
    const mockLogger = {
      debug: vi.fn(),
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
    };
    const configOptions = {
      filepath: "/custom/credentials",
      configFilepath: "/custom/config",
      ignoreCache: true,
      logger: mockLogger,
    };

    mockParseKnownFiles.mockResolvedValue({
      signin: { login_session: "arn:aws:sts::012345678910:assumed-role/Admin/admin" },
    });
    mockGetProfileName.mockReturnValue("signin");

    const mockFetcher = {
      loadCredentials: vi.fn().mockResolvedValue(mockCreds),
    };
    mockLoginCredentialsFetcher.mockImplementation(() => mockFetcher as any);

    const provider = fromLoginCredentials({
      profile: "signin",
      ...configOptions,
    });
    await provider();

    expect(mockParseKnownFiles).toHaveBeenCalledWith({
      profile: "signin",
      filepath: "/custom/credentials",
      configFilepath: "/custom/config",
      ignoreCache: true,
      logger: mockLogger,
    });
  });
});
