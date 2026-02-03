import { getProfileName, parseKnownFiles } from "@smithy/shared-ini-file-loader";
import { AwsCredentialIdentity } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromProcess } from "./fromProcess";
import { resolveProcessCredentials } from "./resolveProcessCredentials";

vi.mock("@smithy/shared-ini-file-loader");
vi.mock("./resolveProcessCredentials");

describe(fromProcess.name, () => {
  const mockMasterProfileName = "mockMasterProfileName";
  const mockProfileName = "mockProfileName";
  const mockInit = { profile: mockProfileName };
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
      await fromProcess(mockInit)();
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInit);
    expect(getProfileName).not.toHaveBeenCalled();
    expect(resolveProcessCredentials).not.toHaveBeenCalled();
  });

  it("rethrows error if resolving process creds fails", async () => {
    const expectedError = new Error("from resolveProcessCredentials");
    vi.mocked(resolveProcessCredentials).mockRejectedValue(expectedError);
    try {
      await fromProcess(mockInit)();
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInit);
    expect(getProfileName).toHaveBeenCalledWith(mockInit);
    expect(resolveProcessCredentials).toHaveBeenCalledWith(mockMasterProfileName, mockProfiles, undefined);
  });

  it("returns resolved process creds", async () => {
    const expectedCreds: AwsCredentialIdentity = {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
    };
    vi.mocked(resolveProcessCredentials).mockResolvedValue(expectedCreds);
    const receivedCreds = await fromProcess(mockInit)();
    expect(receivedCreds).toStrictEqual(expectedCreds);
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInit);
    expect(getProfileName).toHaveBeenCalledWith(mockInit);
    expect(resolveProcessCredentials).toHaveBeenCalledWith(mockMasterProfileName, mockProfiles, undefined);
  });
});
