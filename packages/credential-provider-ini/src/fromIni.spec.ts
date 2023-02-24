import { getProfileName, parseKnownFiles } from "@aws-sdk/shared-ini-file-loader";
import { AwsCredentialIdentity } from "@aws-sdk/types";

import { fromIni } from "./fromIni";
import { resolveProfileData } from "./resolveProfileData";

jest.mock("@aws-sdk/shared-ini-file-loader");
jest.mock("./resolveProfileData");

describe(fromIni.name, () => {
  const mockMasterProfileName = "mockMasterProfileName";
  const mockProfileName = "mockProfileName";
  const mockInit = { profile: mockProfileName };
  const mockProfiles = { [mockProfileName]: { key: "value" } };

  beforeEach(() => {
    (parseKnownFiles as jest.Mock).mockResolvedValue(mockProfiles);
    (getProfileName as jest.Mock).mockReturnValue(mockMasterProfileName);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("rethrows error if parsing known files fails", async () => {
    const expectedError = new Error("from parseKnownFiles");
    (parseKnownFiles as jest.Mock).mockRejectedValue(expectedError);
    try {
      await fromIni(mockInit)();
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInit);
    expect(getProfileName).not.toHaveBeenCalled();
    expect(resolveProfileData).not.toHaveBeenCalled();
  });

  it("rethrows error if resolving process creds fails", async () => {
    const expectedError = new Error("from resolveProcessCredentials");
    (resolveProfileData as jest.Mock).mockRejectedValue(expectedError);
    try {
      await fromIni(mockInit)();
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInit);
    expect(getProfileName).toHaveBeenCalledWith(mockInit);
    expect(resolveProfileData).toHaveBeenCalledWith(mockMasterProfileName, mockProfiles, mockInit);
  });

  it("returns resolved process creds", async () => {
    const expectedCreds: AwsCredentialIdentity = {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
    };
    (resolveProfileData as jest.Mock).mockResolvedValue(expectedCreds);
    const receivedCreds = await fromIni(mockInit)();
    expect(receivedCreds).toStrictEqual(expectedCreds);
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInit);
    expect(getProfileName).toHaveBeenCalledWith(mockInit);
    expect(resolveProfileData).toHaveBeenCalledWith(mockMasterProfileName, mockProfiles, mockInit);
  });
});
