import { fromSSO, isSsoProfile as origIsSsoProfile, validateSsoProfile } from "@aws-sdk/credential-provider-sso";
import { AwsCredentialIdentity } from "@aws-sdk/types";

import { isSsoProfile, resolveSsoCredentials } from "./resolveSsoCredentials";

jest.mock("@aws-sdk/credential-provider-sso");

describe(isSsoProfile.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each([false, true])("returns value returned by original isSsoProfile: %s", (value) => {
    (origIsSsoProfile as unknown as jest.Mock).mockReturnValue(value);
    expect(isSsoProfile({})).toEqual(value);
  });
});

describe(resolveSsoCredentials.name, () => {
  const getMockOriginalSsoProfile = () => ({
    sso_start_url: "mock_sso_start_url",
    sso_account_id: "mock_sso_account_id",
    sso_region: "mock_sso_region",
    sso_role_name: "mock_sso_role_name",
  });

  const getMockValidatedSsoProfile = <T>(add: T = {} as T) =>
    ({
      sso_start_url: "mock_validated_sso_start_url",
      sso_account_id: "mock_validated_sso_account_id",
      sso_region: "mock_validated_sso_region",
      sso_role_name: "mock_validated_sso_role_name",
      ...add,
    });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("throws error when validation fails", async () => {
    const mockProfile = getMockOriginalSsoProfile();
    const expectedError = new Error("error from validateSsoProfile");
    (validateSsoProfile as jest.Mock).mockImplementation(() => {
      throw expectedError;
    });
    try {
      await resolveSsoCredentials(mockProfile);
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(validateSsoProfile).toHaveBeenCalledWith(mockProfile);
  });

  it("throws error when fromSSO throws error", async () => {
    const mockProfile = getMockOriginalSsoProfile();
    const mockValidatedProfile = getMockValidatedSsoProfile();
    const expectedError = new Error("error from fromSSO");

    (validateSsoProfile as jest.Mock).mockReturnValue(mockValidatedProfile);
    (fromSSO as jest.Mock).mockReturnValue(() => Promise.reject(expectedError));

    try {
      await resolveSsoCredentials(mockProfile);
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(validateSsoProfile).toHaveBeenCalledWith(mockProfile);
    expect(fromSSO).toHaveBeenCalledWith({
      ssoStartUrl: mockValidatedProfile.sso_start_url,
      ssoAccountId: mockValidatedProfile.sso_account_id,
      ssoRegion: mockValidatedProfile.sso_region,
      ssoRoleName: mockValidatedProfile.sso_role_name,
    });
  });

  it("calls fromSSO when validation succeeds", async () => {
    const mockProfile = getMockOriginalSsoProfile();
    const mockValidatedProfile = getMockValidatedSsoProfile();

    const mockCreds: AwsCredentialIdentity = {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
    };

    (validateSsoProfile as jest.Mock).mockReturnValue(mockValidatedProfile);
    (fromSSO as jest.Mock).mockReturnValue(() => Promise.resolve(mockCreds));

    const receivedCreds = await resolveSsoCredentials(mockProfile);
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(validateSsoProfile).toHaveBeenCalledWith(mockProfile);
    expect(fromSSO).toHaveBeenCalledWith({
      ssoStartUrl: mockValidatedProfile.sso_start_url,
      ssoAccountId: mockValidatedProfile.sso_account_id,
      ssoRegion: mockValidatedProfile.sso_region,
      ssoRoleName: mockValidatedProfile.sso_role_name,
    });
  });

  it("calls fromSSO with optional sso session name", async () => {
    const mockProfile = getMockOriginalSsoProfile();
    const mockValidatedProfile = getMockValidatedSsoProfile({
      sso_session: "test-session",
    });

    const mockCreds: AwsCredentialIdentity = {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
    };

    (validateSsoProfile as jest.Mock).mockReturnValue(mockValidatedProfile);
    (fromSSO as jest.Mock).mockReturnValue(() => Promise.resolve(mockCreds));

    await resolveSsoCredentials(mockProfile);
    expect(fromSSO).toHaveBeenCalledWith({
      ssoStartUrl: mockValidatedProfile.sso_start_url,
      ssoAccountId: mockValidatedProfile.sso_account_id,
      ssoRegion: mockValidatedProfile.sso_region,
      ssoRoleName: mockValidatedProfile.sso_role_name,
      ssoSession: mockValidatedProfile.sso_session,
    });
  });
});
