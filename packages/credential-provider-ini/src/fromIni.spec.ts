import { AssumeRoleWithWebIdentityParams } from "@aws-sdk/credential-provider-web-identity";
import { CredentialProvider, Credentials } from "@aws-sdk/types";
import { getMasterProfileName, parseKnownFiles } from "@aws-sdk/util-credentials";

import { fromIni } from "./fromIni";
import { AssumeRoleParams } from "./resolveAssumeRoleCredentials";
import { resolveProfileData } from "./resolveProfileData";

jest.mock("@aws-sdk/util-credentials");
jest.mock("./resolveProfileData");

describe(fromIni.name, () => {
  const mockMasterProfileName = "mockMasterProfileName";
  const mockProfileName = "mockProfileName";
  const mockInit = { profile: mockProfileName };
  const mockProfiles = { [mockProfileName]: { key: "value" } };

  beforeEach(() => {
    (parseKnownFiles as jest.Mock).mockResolvedValue(mockProfiles);
    (getMasterProfileName as jest.Mock).mockReturnValue(mockMasterProfileName);
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
    expect(getMasterProfileName).not.toHaveBeenCalled();
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
    expect(getMasterProfileName).toHaveBeenCalledWith(mockInit);
    expect(resolveProfileData).toHaveBeenCalledWith(mockMasterProfileName, mockProfiles, mockInit);
  });

  it("returns resolved process creds", async () => {
    const expectedCreds: Credentials = {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
    };
    (resolveProfileData as jest.Mock).mockResolvedValue(expectedCreds);
    const receivedCreds = await fromIni(mockInit)();
    expect(receivedCreds).toStrictEqual(expectedCreds);
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInit);
    expect(getMasterProfileName).toHaveBeenCalledWith(mockInit);
    expect(resolveProfileData).toHaveBeenCalledWith(mockMasterProfileName, mockProfiles, mockInit);
  });
});
