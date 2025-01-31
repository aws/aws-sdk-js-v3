import { getProfileName, parseKnownFiles } from "@smithy/shared-ini-file-loader";
import { AwsCredentialIdentity } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromIni } from "./fromIni";
import { resolveProfileData } from "./resolveProfileData";

vi.mock("@smithy/shared-ini-file-loader");
vi.mock("./resolveProfileData");

describe(fromIni.name, () => {
  const mockMasterProfileName = "mockMasterProfileName";
  const mockProfileName = "mockProfileName";
  const mockInit = { profile: mockProfileName };
  const mockInitWithParentClientConfig = { profile: mockProfileName, parentClientConfig: {} };
  const mockProfiles = { [mockProfileName]: { key: "value" } };

  beforeEach(() => {
    vi.mocked(parseKnownFiles).mockResolvedValue(mockProfiles);
    vi.mocked(getProfileName).mockReturnValue(mockMasterProfileName);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("rethrows error if parsing known files fails", async () => {
    const expectedError = new Error("from parseKnownFiles");
    vi.mocked(parseKnownFiles).mockRejectedValue(expectedError);
    try {
      await fromIni(mockInit)();
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInitWithParentClientConfig);
    expect(getProfileName).not.toHaveBeenCalled();
    expect(resolveProfileData).not.toHaveBeenCalled();
  });

  it("rethrows error if resolving process creds fails", async () => {
    const expectedError = new Error("from resolveProcessCredentials");
    vi.mocked(resolveProfileData).mockRejectedValue(expectedError);
    try {
      await fromIni(mockInit)();
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInitWithParentClientConfig);
    expect(getProfileName).toHaveBeenCalledWith(mockInit);
    expect(resolveProfileData).toHaveBeenCalledWith(
      mockMasterProfileName,
      mockProfiles,
      mockInitWithParentClientConfig
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
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInitWithParentClientConfig);
    expect(getProfileName).toHaveBeenCalledWith(mockInit);
    expect(resolveProfileData).toHaveBeenCalledWith(
      mockMasterProfileName,
      mockProfiles,
      mockInitWithParentClientConfig
    );
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
          parentClientConfig: expect.objectContaining(callerConfig),
        })
      );
    });
  });
});
