import { CredentialsProviderError } from "@smithy/property-provider";

import { isAssumeRoleProfile, resolveAssumeRoleCredentials } from "./resolveAssumeRoleCredentials";
import { resolveProfileData } from "./resolveProfileData";
import { isSsoProfile, resolveSsoCredentials } from "./resolveSsoCredentials";
import { isStaticCredsProfile, resolveStaticCredentials } from "./resolveStaticCredentials";
import { isWebIdentityProfile, resolveWebIdentityCredentials } from "./resolveWebIdentityCredentials";

jest.mock("./resolveAssumeRoleCredentials");
jest.mock("./resolveSsoCredentials");
jest.mock("./resolveStaticCredentials");
jest.mock("./resolveWebIdentityCredentials");

describe(resolveProfileData.name, () => {
  const mockProfileName = "mockProfileName";
  const mockProfiles = { [mockProfileName]: {} };
  const mockOptions = {
    mfaCodeProvider: jest.fn(),
    roleAssumer: jest.fn(),
    roleAssumerWithWebIdentity: jest.fn(),
  };
  const mockError = new CredentialsProviderError(
    `Profile ${mockProfileName} could not be found or parsed in shared credentials file.`
  );

  const mockCreds = {
    accessKeyId: "mockAccessKeyId",
    secretAccessKey: "mockSecretAccessKey",
  };

  const mockFakeCreds = {
    accessKeyId: "mockFakeAccessKeyId",
    secretAccessKey: "mockFakeSecretAccessKey",
  };

  beforeEach(() => {
    [
      resolveAssumeRoleCredentials,
      resolveSsoCredentials,
      resolveStaticCredentials,
      resolveWebIdentityCredentials,
    ].forEach((resolveCredsFn) => {
      (resolveCredsFn as jest.Mock).mockImplementation(() => Promise.resolve(mockFakeCreds));
    });
  });

  beforeEach(() => {
    [isAssumeRoleProfile, isSsoProfile, isStaticCredsProfile, isWebIdentityProfile].forEach((isProfileFn) => {
      (isProfileFn as jest.Mock).mockReturnValue(true);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("throws error if all profile checks fail", async () => {
    [isAssumeRoleProfile, isSsoProfile, isStaticCredsProfile, isWebIdentityProfile].forEach((isProfileFn) => {
      (isProfileFn as jest.Mock).mockReturnValue(false);
    });
    try {
      await resolveProfileData(mockProfileName, mockProfiles, mockOptions);
      fail(`expected ${mockError}`);
    } catch (error) {
      expect(error).toStrictEqual(mockError);
    }
  });

  it("resolves with static creds when profiles are previously visited and current profile has static creds", async () => {
    (resolveStaticCredentials as jest.Mock).mockImplementation(() => Promise.resolve(mockCreds));
    const receivedCreds = await resolveProfileData(mockProfileName, mockProfiles, mockOptions, { testProfile: true });
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(resolveStaticCredentials).toHaveBeenCalledWith(mockProfiles[mockProfileName]);
  });

  describe("resolves with assumeRole", () => {
    it("when it's static creds, but profiles are not visited", async () => {
      (resolveAssumeRoleCredentials as jest.Mock).mockImplementation(() => Promise.resolve(mockCreds));
      const receivedCreds = await resolveProfileData(mockProfileName, mockProfiles, mockOptions);
      expect(receivedCreds).toStrictEqual(mockCreds);
      expect(resolveAssumeRoleCredentials).toHaveBeenCalledWith(mockProfileName, mockProfiles, mockOptions, {});
    });

    it("when it's not static creds, and profiles are visited", async () => {
      (isStaticCredsProfile as unknown as jest.Mock).mockReturnValue(false);
      (resolveAssumeRoleCredentials as jest.Mock).mockImplementation(() => Promise.resolve(mockCreds));
      const receivedCreds = await resolveProfileData(mockProfileName, mockProfiles, mockOptions, { testProfile: true });
      expect(receivedCreds).toStrictEqual(mockCreds);
      expect(resolveAssumeRoleCredentials).toHaveBeenCalledWith(mockProfileName, mockProfiles, mockOptions, {
        testProfile: true,
      });
    });
  });

  it("resolves with static creds when no profiles are visited and it's not assume role profile", async () => {
    (isAssumeRoleProfile as unknown as jest.Mock).mockReturnValue(false);
    (resolveStaticCredentials as jest.Mock).mockImplementation(() => Promise.resolve(mockCreds));
    const receivedCreds = await resolveProfileData(mockProfileName, mockProfiles, mockOptions);
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(resolveStaticCredentials).toHaveBeenCalledWith(mockProfiles[mockProfileName]);
  });

  it("resolves with web identity profile, when it's not static or assume role", async () => {
    [isAssumeRoleProfile, isStaticCredsProfile].forEach((isProfileFn) => {
      (isProfileFn as jest.Mock).mockReturnValue(false);
    });
    (resolveWebIdentityCredentials as jest.Mock).mockImplementation(() => Promise.resolve(mockCreds));
    const receivedCreds = await resolveProfileData(mockProfileName, mockProfiles, mockOptions);
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(resolveWebIdentityCredentials).toHaveBeenCalledWith(mockProfiles[mockProfileName], mockOptions);
  });

  it("resolves with sso profile, when it's not static or assume role or web identity", async () => {
    [isAssumeRoleProfile, isStaticCredsProfile, isWebIdentityProfile].forEach((isProfileFn) => {
      (isProfileFn as jest.Mock).mockReturnValue(false);
    });
    (resolveSsoCredentials as jest.Mock).mockImplementation(() => Promise.resolve(mockCreds));
    const receivedCreds = await resolveProfileData(mockProfileName, mockProfiles, mockOptions);
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(resolveSsoCredentials).toHaveBeenCalledWith(mockProfiles[mockProfileName]);
  });
});
