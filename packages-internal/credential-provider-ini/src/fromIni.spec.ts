import { getProfileName, parseKnownFiles } from "@smithy/core/config";
import type { AwsCredentialIdentity } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromIni } from "./fromIni";
import {
  getProfileCredentialSource,
  isCredentialRefreshSource,
  resolveProfileDataForSource,
} from "./resolveProfileData";

const START_MS = new Date("2024-01-01T00:00:00Z").getTime();

vi.mock("@smithy/core/config");
vi.mock("./resolveProfileData");

describe(fromIni.name, () => {
  const mockMasterProfileName = "mockMasterProfileName";
  const mockProfileName = "mockProfileName";
  const mockInit = { profile: mockProfileName };
  const mockInitWithParentClientConfig = { profile: mockProfileName };
  const mockProfiles = { [mockProfileName]: { key: "value" } };

  beforeEach(() => {
    vi.mocked(parseKnownFiles).mockResolvedValue(mockProfiles);
    vi.mocked(getProfileName).mockReturnValue(mockMasterProfileName);
    vi.mocked(getProfileCredentialSource).mockReturnValue("process");
    vi.mocked(isCredentialRefreshSource).mockImplementation((source) =>
      ["assumeRole", "webIdentity", "sso", "login"].includes(source)
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("rethrows error if parsing known files fails", async () => {
    const expectedError = new Error("from parseKnownFiles");
    vi.mocked(parseKnownFiles).mockRejectedValue(expectedError);
    try {
      await fromIni(mockInit)();
      expect.fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInitWithParentClientConfig);
    expect(getProfileName).toHaveBeenCalledWith(mockInit);
    expect(resolveProfileDataForSource).not.toHaveBeenCalled();
  });

  it("rethrows error if resolving process creds fails", async () => {
    const expectedError = new Error("from resolveProcessCredentials");
    vi.mocked(resolveProfileDataForSource).mockRejectedValue(expectedError);
    try {
      await fromIni(mockInit)();
      expect.fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInitWithParentClientConfig);
    expect(getProfileName).toHaveBeenCalledWith(mockInit);
    expect(resolveProfileDataForSource).toHaveBeenCalledWith(
      "process",
      mockMasterProfileName,
      mockProfiles,
      mockInitWithParentClientConfig,
      undefined,
      undefined
    );
  });

  it("returns resolved process creds", async () => {
    const expectedCreds: AwsCredentialIdentity = {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
    };
    vi.mocked(resolveProfileDataForSource).mockResolvedValue(expectedCreds);
    const receivedCreds = await fromIni(mockInit)();
    expect(receivedCreds).toStrictEqual(expectedCreds);
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInitWithParentClientConfig);
    expect(getProfileName).toHaveBeenCalledWith(mockInit);
    expect(resolveProfileDataForSource).toHaveBeenCalledWith(
      "process",
      mockMasterProfileName,
      mockProfiles,
      mockInitWithParentClientConfig,
      undefined,
      undefined
    );
  });

  describe("provider refresh policy", () => {
    const expiration = new Date(START_MS + 6 * 3600_000);

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it("uses the credential refresh lifecycle for an in-scope profile", async () => {
      vi.spyOn(Date, "now").mockReturnValue(START_MS);
      vi.mocked(getProfileCredentialSource).mockReturnValue("sso");
      const credentials = {
        accessKeyId: "AKID",
        secretAccessKey: "SECRET",
        expiration,
      };
      vi.mocked(resolveProfileDataForSource).mockResolvedValueOnce(credentials);
      const provider = fromIni(mockInit);
      await provider();
      vi.mocked(Date.now).mockReturnValue(expiration.getTime() + 1);
      vi.mocked(resolveProfileDataForSource).mockRejectedValueOnce(new Error("STS unavailable"));

      await expect(provider()).resolves.toBe(credentials);
      expect(typeof (provider as any).invalidate).toBe("function");
    });

    it("keeps the previous hard-expiry behavior for credential_process", async () => {
      vi.spyOn(Date, "now").mockReturnValue(START_MS);
      vi.mocked(getProfileCredentialSource).mockReturnValue("process");
      vi.mocked(resolveProfileDataForSource).mockResolvedValueOnce({
        accessKeyId: "AKID",
        secretAccessKey: "SECRET",
        expiration,
      });
      const provider = fromIni(mockInit);
      await provider();
      vi.mocked(Date.now).mockReturnValue(expiration.getTime() + 1);
      vi.mocked(resolveProfileDataForSource).mockRejectedValueOnce(new Error("process failed"));

      await expect(provider()).rejects.toThrow("process failed");
      expect((provider as any).invalidate).toBeUndefined();
    });
    it("keeps the selected source type when profile files are reloaded", async () => {
      vi.spyOn(Date, "now").mockReturnValue(START_MS);
      vi.mocked(getProfileCredentialSource).mockReturnValue("sso");
      const first = {
        accessKeyId: "SSO-1",
        secretAccessKey: "SECRET",
        expiration,
      };
      const second = {
        accessKeyId: "SSO-2",
        secretAccessKey: "SECRET",
        expiration: new Date(expiration.getTime() + 3600_000),
      };
      vi.mocked(resolveProfileDataForSource).mockResolvedValueOnce(first).mockResolvedValueOnce(second);
      const provider = fromIni(mockInit);
      await provider();
      vi.mocked(Date.now).mockReturnValue(expiration.getTime() + 1);

      await expect(provider()).resolves.toBe(second);
      expect(resolveProfileDataForSource).toHaveBeenLastCalledWith(
        "sso",
        mockMasterProfileName,
        mockProfiles,
        mockInitWithParentClientConfig,
        undefined,
        undefined
      );
      expect(typeof (provider as any).invalidate).toBe("function");
    });

    it("passes the rejected access key ID to the profile's source after an invalidation", async () => {
      vi.spyOn(Date, "now").mockReturnValue(START_MS);
      vi.mocked(getProfileCredentialSource).mockReturnValue("login");
      vi.mocked(resolveProfileDataForSource)
        .mockResolvedValueOnce({ accessKeyId: "AKID-1", secretAccessKey: "SECRET", expiration })
        .mockResolvedValueOnce({ accessKeyId: "AKID-2", secretAccessKey: "SECRET", expiration });
      const provider = fromIni(mockInit);
      await provider();

      (provider as any).invalidate({ accessKeyId: "AKID-1" });
      await expect(provider()).resolves.toMatchObject({ accessKeyId: "AKID-2" });

      expect(resolveProfileDataForSource).toHaveBeenLastCalledWith(
        "login",
        mockMasterProfileName,
        mockProfiles,
        mockInitWithParentClientConfig,
        undefined,
        "AKID-1"
      );
    });

    it("re-classifies a profile that was unknown on the first call", async () => {
      vi.spyOn(Date, "now").mockReturnValue(START_MS);
      let profileType: "unknown" | "sso" = "unknown";
      vi.mocked(getProfileCredentialSource).mockImplementation(() => profileType);
      vi.mocked(resolveProfileDataForSource)
        .mockRejectedValueOnce(new Error("profile not configured"))
        .mockResolvedValueOnce({ accessKeyId: "SSO", secretAccessKey: "SECRET", expiration });
      const provider = fromIni(mockInit);

      await expect(provider()).rejects.toThrow("profile not configured");
      expect((provider as any).invalidate).toBeUndefined();

      profileType = "sso";

      await expect(provider()).resolves.toMatchObject({ accessKeyId: "SSO" });
      expect(resolveProfileDataForSource).toHaveBeenLastCalledWith(
        "sso",
        mockMasterProfileName,
        mockProfiles,
        mockInitWithParentClientConfig,
        undefined,
        undefined
      );
      expect(typeof (provider as any).invalidate).toBe("function");
    });
  });

  describe("when a profile is edited to use a different kind of credentials", () => {
    const ssoCredentials = { accessKeyId: "SSO", secretAccessKey: "SECRET", expiration: new Date(START_MS + 3600_000) };
    const processCredentials = { accessKeyId: "PROCESS", secretAccessKey: "SECRET" };
    let profileType: "sso" | "process" | "unknown";

    beforeEach(() => {
      vi.spyOn(Date, "now").mockReturnValue(START_MS);
      profileType = "sso";
      vi.mocked(getProfileCredentialSource).mockImplementation(() => profileType);
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    const expireCachedCredentials = () => vi.mocked(Date.now).mockReturnValue(START_MS + 3600_000 + 1);

    it("switches to the new kind on the next refresh, then keeps using it", async () => {
      vi.mocked(resolveProfileDataForSource).mockImplementation(async (type) =>
        type === "sso" ? ssoCredentials : processCredentials
      );
      const provider = fromIni(mockInit);
      await expect(provider()).resolves.toMatchObject({ accessKeyId: "SSO" });

      profileType = "process";
      expireCachedCredentials();

      await expect(provider()).resolves.toMatchObject({ accessKeyId: "PROCESS" });
      await expect(provider()).resolves.toMatchObject({ accessKeyId: "PROCESS" });
      expect(resolveProfileDataForSource).toHaveBeenLastCalledWith(
        "process",
        mockMasterProfileName,
        mockProfiles,
        mockInitWithParentClientConfig,
        undefined,
        undefined
      );
      // The new provider uses the previous cache for Process, which has no invalidate.
      expect((provider as any).invalidate).toBeUndefined();
    });

    it("keeps the cached credentials and the old provider when the first fetch with the new kind fails", async () => {
      vi.mocked(resolveProfileDataForSource).mockImplementation(async (type) => {
        if (type === "sso") {
          return ssoCredentials;
        }
        throw new Error("credential_process failed");
      });
      const provider = fromIni(mockInit);
      await provider();

      profileType = "process";
      expireCachedCredentials();

      // The refresh lifecycle keeps the SSO credentials and backs off.
      await expect(provider()).resolves.toMatchObject({ accessKeyId: "SSO" });
      expect(typeof (provider as any).invalidate).toBe("function");
    });

    it("keeps the current kind when the edited profile has no credential settings", async () => {
      vi.mocked(resolveProfileDataForSource).mockResolvedValue(ssoCredentials);
      const provider = fromIni(mockInit);
      await provider();

      profileType = "unknown";
      expireCachedCredentials();
      await provider();

      expect(resolveProfileDataForSource).toHaveBeenLastCalledWith(
        "sso",
        mockMasterProfileName,
        mockProfiles,
        mockInitWithParentClientConfig,
        undefined,
        undefined
      );
    });
  });

  describe("ignoreCache option", () => {
    it("passes ignoreCache option to parseKnownFiles when true", async () => {
      const initWithIgnoreCache = { ...mockInit, ignoreCache: true };
      const expectedInitWithParentClientConfig = {
        ...mockInitWithParentClientConfig,
        ignoreCache: true,
      };

      await fromIni(initWithIgnoreCache)();

      expect(parseKnownFiles).toHaveBeenCalledWith(expectedInitWithParentClientConfig);
    });

    it("passes ignoreCache option to parseKnownFiles when false", async () => {
      const initWithIgnoreCache = { ...mockInit, ignoreCache: false };
      const expectedInitWithParentClientConfig = {
        ...mockInitWithParentClientConfig,
        ignoreCache: false,
      };

      await fromIni(initWithIgnoreCache)();

      expect(parseKnownFiles).toHaveBeenCalledWith(expectedInitWithParentClientConfig);
    });

    it("does not pass ignoreCache when option is undefined", async () => {
      await fromIni(mockInit)();

      expect(parseKnownFiles).toHaveBeenCalledWith(mockInitWithParentClientConfig);
      expect(mockInitWithParentClientConfig).not.toHaveProperty("ignoreCache");
    });

    it("preserves ignoreCache when merging with callerClientConfig", async () => {
      const initWithIgnoreCache = { ...mockInit, ignoreCache: true };
      const callerConfig = {
        profile: "otherProfile",
        region: async () => "us-east-1",
      };

      await fromIni(initWithIgnoreCache)({ callerClientConfig: callerConfig });

      expect(parseKnownFiles).toHaveBeenCalledWith(
        expect.objectContaining({
          ignoreCache: true,
          profile: mockProfileName,
        })
      );
    });
  });
});
