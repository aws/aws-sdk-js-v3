import { getProfileName, loadSharedConfigFiles, readFile } from "@smithy/core/config";
import type { AwsCredentialIdentity } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromIni } from "./fromIni";
import { resolveProfileData } from "./resolveProfileData";

vi.mock("@smithy/core/config");
vi.mock("./resolveProfileData");

describe(fromIni.name, () => {
  const mockMasterProfileName = "mockMasterProfileName";
  const mockProfileName = "mockProfileName";
  const mockInit = { profile: mockProfileName };
  const mockInitWithParentClientConfig = { profile: mockProfileName };
  const mockProfiles = { [mockProfileName]: { key: "value" } };

  beforeEach(() => {
    vi.mocked(loadSharedConfigFiles).mockResolvedValue({ configFile: mockProfiles, credentialsFile: {} });
    vi.mocked(readFile).mockResolvedValue("");
    vi.mocked(getProfileName).mockReturnValue(mockMasterProfileName);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("rethrows error if parsing known files fails", async () => {
    const expectedError = new Error("from loadSharedConfigFiles");
    vi.mocked(loadSharedConfigFiles).mockRejectedValue(expectedError);
    try {
      await fromIni(mockInit)();
      expect.fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(loadSharedConfigFiles).toHaveBeenCalledWith(mockInitWithParentClientConfig);
    expect(getProfileName).not.toHaveBeenCalled();
    expect(resolveProfileData).not.toHaveBeenCalled();
  });

  it("rethrows error if resolving process creds fails", async () => {
    const expectedError = new Error("from resolveProcessCredentials");
    vi.mocked(resolveProfileData).mockRejectedValue(expectedError);
    try {
      await fromIni(mockInit)();
      expect.fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(loadSharedConfigFiles).toHaveBeenCalledWith(mockInitWithParentClientConfig);
    expect(getProfileName).toHaveBeenCalledWith(mockInit);
    expect(resolveProfileData).toHaveBeenCalledWith(
      mockMasterProfileName,
      mockProfiles,
      mockInitWithParentClientConfig,
      undefined
    );
  });

  it("returns resolved process creds", async () => {
    const expectedCreds: AwsCredentialIdentity = {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
    };
    vi.mocked(resolveProfileData).mockResolvedValue(expectedCreds);
    const receivedCreds = await fromIni(mockInit)();
    expect(receivedCreds).toStrictEqual(expectedCreds);
    expect(loadSharedConfigFiles).toHaveBeenCalledWith(mockInitWithParentClientConfig);
    expect(getProfileName).toHaveBeenCalledWith(mockInit);
    expect(resolveProfileData).toHaveBeenCalledWith(
      mockMasterProfileName,
      mockProfiles,
      mockInitWithParentClientConfig,
      undefined
    );
  });

  describe("ignoreCache option", () => {
    it("passes ignoreCache option to loadSharedConfigFiles when true", async () => {
      const initWithIgnoreCache = { ...mockInit, ignoreCache: true };
      const expectedInitWithParentClientConfig = {
        ...mockInitWithParentClientConfig,
        ignoreCache: true,
      };

      await fromIni(initWithIgnoreCache)();

      expect(loadSharedConfigFiles).toHaveBeenCalledWith(expectedInitWithParentClientConfig);
    });

    it("passes ignoreCache option to loadSharedConfigFiles when false", async () => {
      const initWithIgnoreCache = { ...mockInit, ignoreCache: false };
      const expectedInitWithParentClientConfig = {
        ...mockInitWithParentClientConfig,
        ignoreCache: false,
      };

      await fromIni(initWithIgnoreCache)();

      expect(loadSharedConfigFiles).toHaveBeenCalledWith(expectedInitWithParentClientConfig);
    });

    it("does not pass ignoreCache when option is undefined", async () => {
      await fromIni(mockInit)();

      expect(loadSharedConfigFiles).toHaveBeenCalledWith(mockInitWithParentClientConfig);
      expect(mockInitWithParentClientConfig).not.toHaveProperty("ignoreCache");
    });

    it("preserves ignoreCache when merging with callerClientConfig", async () => {
      const initWithIgnoreCache = { ...mockInit, ignoreCache: true };
      const callerConfig = {
        profile: "otherProfile",
        region: async () => "us-east-1",
      };

      await fromIni(initWithIgnoreCache)({ callerClientConfig: callerConfig });

      expect(loadSharedConfigFiles).toHaveBeenCalledWith(
        expect.objectContaining({
          ignoreCache: true,
          profile: mockProfileName,
        })
      );
    });
  });
});
