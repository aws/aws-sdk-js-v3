import { SSOClient } from "@aws-sdk/client-sso";
import { CredentialsProviderError } from "@smithy/property-provider";
import { getProfileName, parseKnownFiles } from "@smithy/shared-ini-file-loader";

import { fromSSO } from "./fromSSO";
import { isSsoProfile } from "./isSsoProfile";
import { resolveSSOCredentials } from "./resolveSSOCredentials";
import { validateSsoProfile } from "./validateSsoProfile";

jest.mock("@smithy/shared-ini-file-loader");
jest.mock("./isSsoProfile");
jest.mock("./resolveSSOCredentials");
jest.mock("./validateSsoProfile");

describe(fromSSO.name, () => {
  const mockSsoClient = {} as SSOClient;

  const mockSsoProfile = {
    ssoStartUrl: "mock_sso_start_url",
    ssoAccountId: "mock_sso_account_id",
    ssoRegion: "mock_sso_region",
    ssoRoleName: "mock_sso_role_name",
  };

  const mockCreds = {
    accessKeyId: "mockAccessKeyId",
    secretAccessKey: "mockSecretAccessKey",
  };

  const mockProfileName = "mockProfileName";

  beforeEach(() => {
    (resolveSSOCredentials as jest.Mock).mockResolvedValue(mockCreds);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("throws error if profile is not found", async () => {
    const mockInit = { profile: mockProfileName };
    const mockProfiles = {};
    (parseKnownFiles as jest.Mock).mockResolvedValue(mockProfiles);
    (getProfileName as jest.Mock).mockReturnValue(mockProfileName);
    const expectedError = new CredentialsProviderError(`Profile ${mockProfileName} was not found.`);

    try {
      await fromSSO(mockInit)();
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInit);
  });

  describe("all sso* values are not set", () => {
    const mockInit = { profile: mockProfileName };
    const mockProfiles = { [mockProfileName]: mockSsoProfile };

    beforeEach(() => {
      (parseKnownFiles as jest.Mock).mockResolvedValue(mockProfiles);
      (getProfileName as jest.Mock).mockReturnValue(mockProfileName);
      (isSsoProfile as unknown as jest.Mock).mockReturnValue(true);
    });

    afterEach(() => {
      expect(parseKnownFiles).toHaveBeenCalledWith(mockInit);
      expect(getProfileName).toHaveBeenCalledWith(mockInit);
      expect(isSsoProfile).toHaveBeenCalledWith(mockSsoProfile);
    });

    it("throws error if profile is not an Sso Profile", async () => {
      (isSsoProfile as unknown as jest.Mock).mockReturnValue(false);
      const expectedError = new CredentialsProviderError(
        `Profile ${mockProfileName} is not configured with SSO credentials.`
      );

      try {
        await fromSSO(mockInit)();
        fail(`expected ${expectedError}`);
      } catch (error) {
        expect(error).toStrictEqual(expectedError);
      }
    });

    it("throws error if Sso Profile validation fails", async () => {
      const expectedError = new Error("error");
      (validateSsoProfile as jest.Mock).mockImplementation(() => {
        throw expectedError;
      });

      try {
        await fromSSO(mockInit)();
        fail(`expected ${expectedError}`);
      } catch (error) {
        expect(error).toStrictEqual(expectedError);
      }
      expect(validateSsoProfile).toHaveBeenCalledWith(mockSsoProfile);
    });

    it("calls resolveSSOCredentials with values from validated Sso profile", async () => {
      const mockValidatedSsoProfile = {
        sso_start_url: "mock_sso_start_url",
        sso_account_id: "mock_sso_account_id",
        sso_region: "mock_sso_region",
        sso_role_name: "mock_sso_role_name",
      };
      (validateSsoProfile as jest.Mock).mockReturnValue(mockValidatedSsoProfile);

      const receivedCreds = await fromSSO(mockInit)();
      expect(receivedCreds).toStrictEqual(mockCreds);
      expect(resolveSSOCredentials).toHaveBeenCalledWith({
        ssoStartUrl: mockValidatedSsoProfile.sso_start_url,
        ssoAccountId: mockValidatedSsoProfile.sso_account_id,
        ssoRegion: mockValidatedSsoProfile.sso_region,
        ssoRoleName: mockValidatedSsoProfile.sso_role_name,
        profile: mockProfileName,
        ssoSession: undefined,
      });
    });
  });

  describe("throws error if any required sso* values are not set", () => {
    it.each(["ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"])("missing '%s'", async (key) => {
      const expectedError = new CredentialsProviderError(
        'Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl",' +
          ' "ssoAccountId", "ssoRegion", "ssoRoleName"'
      );
      try {
        await fromSSO({ ...mockSsoProfile, [key]: undefined })();
        fail(`expected ${expectedError}`);
      } catch (error) {
        expect(error).toStrictEqual(expectedError);
      }
    });
  });

  it("calls resolveSSOCredentials if all sso* values are set", async () => {
    const mockOptions = {
      ...mockSsoProfile,
      ssoClient: mockSsoClient,
      profile: mockProfileName,
      ssoSession: "sso-session-name",
    };
    const receivedCreds = await fromSSO(mockOptions)();
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(resolveSSOCredentials).toHaveBeenCalledWith(mockOptions);
  });
});
