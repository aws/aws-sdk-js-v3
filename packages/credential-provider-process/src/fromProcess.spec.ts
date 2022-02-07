import { Credentials } from "@aws-sdk/types";
import { getMasterProfileName, parseKnownFiles } from "@aws-sdk/util-credentials";

import { fromProcess } from "./fromProcess";
import { resolveProcessCredentials } from "./resolveProcessCredentials";

jest.mock("@aws-sdk/util-credentials");
jest.mock("./resolveProcessCredentials");

describe(fromProcess.name, () => {
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
      await fromProcess(mockInit)();
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInit);
    expect(getMasterProfileName).not.toHaveBeenCalled();
    expect(resolveProcessCredentials).not.toHaveBeenCalled();
  });

  it("rethrows error if resolving process creds fails", async () => {
    const expectedError = new Error("from resolveProcessCredentials");
    (resolveProcessCredentials as jest.Mock).mockRejectedValue(expectedError);
    try {
      await fromProcess(mockInit)();
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInit);
    expect(getMasterProfileName).toHaveBeenCalledWith(mockInit);
    expect(resolveProcessCredentials).toHaveBeenCalledWith(mockMasterProfileName, mockProfiles);
  });

  it("returns resolved process creds", async () => {
    const expectedCreds: Credentials = {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
    };
    (resolveProcessCredentials as jest.Mock).mockResolvedValue(expectedCreds);
    const receivedCreds = await fromProcess(mockInit)();
    expect(receivedCreds).toStrictEqual(expectedCreds);
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInit);
    expect(getMasterProfileName).toHaveBeenCalledWith(mockInit);
    expect(resolveProcessCredentials).toHaveBeenCalledWith(mockMasterProfileName, mockProfiles);
  });
});
