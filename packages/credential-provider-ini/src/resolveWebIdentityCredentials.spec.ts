import { fromTokenFile } from "@aws-sdk/credential-provider-web-identity";
import { AwsCredentialIdentity } from "@aws-sdk/types";

import { isWebIdentityProfile, resolveWebIdentityCredentials } from "./resolveWebIdentityCredentials";

jest.mock("@aws-sdk/credential-provider-web-identity");

const getMockWebIdentityProfile = () => ({
  web_identity_token_file: "mock_web_identity_token_file",
  role_arn: "mock_role_arn",
  role_session_name: "mock_role_session_name",
});

describe(isWebIdentityProfile.name, () => {
  describe("returns false for falsy values", () => {
    it.each([false, 0, -0, "", null, undefined, NaN])("%s:", (falsyValue) => {
      expect(isWebIdentityProfile(falsyValue)).toEqual(false);
    });
  });

  describe("returns false for data type which is not an object", () => {
    it.each([true, 1, "string"])("%s:", (notObject) => {
      expect(isWebIdentityProfile(notObject)).toEqual(false);
    });
  });

  it.each(["web_identity_token_file", "role_arn"])("value at '%s' is not of type string", (key) => {
    [true, null, undefined, 1, NaN, {}].forEach((value) => {
      expect(isWebIdentityProfile({ ...getMockWebIdentityProfile(), [key]: value })).toEqual(false);
    });
  });

  it.each(["role_session_name"])("value at '%s' is not of type string | undefined", (key) => {
    [true, null, 1, NaN, {}].forEach((value) => {
      expect(isWebIdentityProfile({ ...getMockWebIdentityProfile(), [key]: value })).toEqual(false);
    });
  });

  it("returns true for WebIdentityProfile", () => {
    expect(isWebIdentityProfile(getMockWebIdentityProfile())).toEqual(true);
  });
});

describe(resolveWebIdentityCredentials.name, () => {
  const mockCreds: AwsCredentialIdentity = {
    accessKeyId: "mockAccessKeyId",
    secretAccessKey: "mockSecretAccessKey",
  };

  beforeEach(() => {
    (fromTokenFile as jest.Mock).mockReturnValue(() => Promise.resolve(mockCreds));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("throws error when fromTokenFile throws", async () => {
    const mockProfile = getMockWebIdentityProfile();
    const mockOptions = { roleAssumerWithWebIdentity: jest.fn() };
    const expectedError = new Error("error from fromTokenFile");

    (fromTokenFile as jest.Mock).mockReturnValue(() => Promise.reject(expectedError));

    try {
      await resolveWebIdentityCredentials(mockProfile, mockOptions);
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(fromTokenFile).toHaveBeenCalledWith({
      webIdentityTokenFile: mockProfile.web_identity_token_file,
      roleArn: mockProfile.role_arn,
      roleSessionName: mockProfile.role_session_name,
      roleAssumerWithWebIdentity: mockOptions.roleAssumerWithWebIdentity,
    });
  });

  it("returns creds from fromTokenFile", async () => {
    const mockProfile = getMockWebIdentityProfile();
    const mockOptions = { roleAssumerWithWebIdentity: jest.fn() };

    (fromTokenFile as jest.Mock).mockReturnValue(() => Promise.resolve(mockCreds));

    const receivedCreds = await resolveWebIdentityCredentials(mockProfile, mockOptions);
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(fromTokenFile).toHaveBeenCalledWith({
      webIdentityTokenFile: mockProfile.web_identity_token_file,
      roleArn: mockProfile.role_arn,
      roleSessionName: mockProfile.role_session_name,
      roleAssumerWithWebIdentity: mockOptions.roleAssumerWithWebIdentity,
    });
  });
});
