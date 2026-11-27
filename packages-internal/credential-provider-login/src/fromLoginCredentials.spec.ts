import { CredentialsProviderError, getProfileName, parseKnownFiles } from "@smithy/core/config";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { fromLoginCredentials } from "./fromLoginCredentials";
import { LoginCredentialsFetcher } from "./LoginCredentialsFetcher";

vi.mock("@smithy/core/config", async (importActual) => ({
  ...(await importActual<any>()),
  getProfileName: vi.fn(),
  parseKnownFiles: vi.fn(),
}));
vi.mock("./LoginCredentialsFetcher");

describe("fromLoginCredentials", () => {
  const mockParseKnownFiles = vi.mocked(parseKnownFiles);
  const mockGetProfileName = vi.mocked(getProfileName);

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

  it("returns a provider that owns the credential refresh lifecycle", () => {
    const provider = fromLoginCredentials({ profile: "signin" });

    expect((provider as any).memoized).toBe(true);
    expect(typeof (provider as any).invalidate).toBe("function");
  });

  it("asks the fetcher for new credentials when a service rejected the cached ones", async () => {
    mockParseKnownFiles.mockResolvedValue({
      signin: { login_session: "arn:aws:sts::012345678910:assumed-role/Admin/admin" },
    });
    mockGetProfileName.mockReturnValue("signin");
    const expiration = new Date(Date.now() + 6 * 3600_000);
    const loadCredentials = vi
      .fn()
      .mockResolvedValueOnce({ ...mockCreds, accessKeyId: "AKID-1", expiration })
      .mockResolvedValueOnce({ ...mockCreds, accessKeyId: "AKID-2", expiration });
    vi.mocked(LoginCredentialsFetcher).prototype.loadCredentials = loadCredentials;
    const provider = fromLoginCredentials({ profile: "signin" }) as ReturnType<typeof fromLoginCredentials> & {
      invalidate(identity: { accessKeyId: string }): void;
    };

    await provider();
    provider.invalidate({ accessKeyId: "AKID-1" });

    await expect(provider()).resolves.toMatchObject({ accessKeyId: "AKID-2" });
    expect(loadCredentials).toHaveBeenNthCalledWith(1, undefined);
    expect(loadCredentials).toHaveBeenNthCalledWith(2, "AKID-1");
  });

  it("keeps separate credentials per caller profile when one provider is shared", async () => {
    const session = { login_session: "arn:aws:sts::012345678910:assumed-role/Admin/admin" };
    mockParseKnownFiles.mockResolvedValue({ dev: session, prod: session });
    mockGetProfileName.mockImplementation(({ profile }: { profile?: string }) => profile ?? "default");
    const expiration = new Date(Date.now() + 6 * 3600_000);
    const loadCredentials = vi
      .fn()
      .mockResolvedValueOnce({ ...mockCreds, accessKeyId: "AKID-dev", expiration })
      .mockResolvedValueOnce({ ...mockCreds, accessKeyId: "AKID-prod", expiration });
    vi.mocked(LoginCredentialsFetcher).prototype.loadCredentials = loadCredentials;
    const caller = (profile: string) => ({ callerClientConfig: { profile, region: async () => "us-east-1" } });

    const provider = fromLoginCredentials();

    await expect(provider(caller("dev"))).resolves.toMatchObject({ accessKeyId: "AKID-dev" });
    await expect(provider(caller("prod"))).resolves.toMatchObject({ accessKeyId: "AKID-prod" });
    await expect(provider(caller("dev"))).resolves.toMatchObject({ accessKeyId: "AKID-dev" });
    expect(loadCredentials).toHaveBeenCalledTimes(2);
  });

  it("should return credentials when profile has login_session", async () => {
    mockParseKnownFiles.mockResolvedValue({
      signin: { login_session: "arn:aws:sts::012345678910:assumed-role/Admin/admin" },
    });
    mockGetProfileName.mockReturnValue("signin");

    const loadCredentials = vi.fn().mockResolvedValue(mockCreds);
    vi.mocked(LoginCredentialsFetcher).prototype.loadCredentials = loadCredentials;

    const provider = fromLoginCredentials({ profile: "signin" });
    const result = await provider();

    expect(result.accessKeyId).toBe("AKIAIOSFODNN7EXAMPLE");
    expect(result.secretAccessKey).toBe("wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY");
    expect(result.sessionToken).toBe("session-token");
    expect(loadCredentials).toHaveBeenCalled();
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

    const loadCredentials = vi.fn().mockResolvedValue(mockCreds);
    vi.mocked(LoginCredentialsFetcher).prototype.loadCredentials = loadCredentials;

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

    const loadCredentials = vi.fn().mockResolvedValue(mockCreds);
    vi.mocked(LoginCredentialsFetcher).prototype.loadCredentials = loadCredentials;

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

    const loadCredentials = vi.fn().mockResolvedValue(mockCreds);
    vi.mocked(LoginCredentialsFetcher).prototype.loadCredentials = loadCredentials;

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
