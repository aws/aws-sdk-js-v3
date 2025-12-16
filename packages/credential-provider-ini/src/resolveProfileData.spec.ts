import type { AwsIdentityProperties } from "@aws-sdk/types";
import { CredentialsProviderError } from "@smithy/property-provider";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { isAssumeRoleProfile, resolveAssumeRoleCredentials } from "./resolveAssumeRoleCredentials";
import { isLoginProfile, resolveLoginCredentials } from "./resolveLoginCredentials";
import { resolveProfileData } from "./resolveProfileData";
import { isSsoProfile, resolveSsoCredentials } from "./resolveSsoCredentials";
import { isStaticCredsProfile, resolveStaticCredentials } from "./resolveStaticCredentials";
import { isWebIdentityProfile, resolveWebIdentityCredentials } from "./resolveWebIdentityCredentials";

vi.mock("./resolveAssumeRoleCredentials");
vi.mock("./resolveLoginCredentials");
vi.mock("./resolveSsoCredentials");
vi.mock("./resolveStaticCredentials");
vi.mock("./resolveWebIdentityCredentials");

describe(resolveProfileData.name, () => {
  const mockProfileName = "mockProfileName";
  const mockProfiles = { [mockProfileName]: {} };
  const mockOptions = {
    mfaCodeProvider: vi.fn(),
    roleAssumer: vi.fn(),
    roleAssumerWithWebIdentity: vi.fn(),
  };
  const mockCallerConfig: AwsIdentityProperties["callerClientConfig"] = {
    async region() {
      return "us-west-2";
    },
  };
  const mockError = new CredentialsProviderError(
    `Could not resolve credentials using profile: [${mockProfileName}] in configuration/credentials file(s).`
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
      resolveLoginCredentials,
      resolveSsoCredentials,
      resolveStaticCredentials,
      resolveWebIdentityCredentials,
    ].forEach((resolveCredsFn) => {
      vi.mocked(resolveCredsFn).mockImplementation(() => Promise.resolve(mockFakeCreds));
    });
  });

  beforeEach(() => {
    [isAssumeRoleProfile, isLoginProfile, isSsoProfile, isStaticCredsProfile, isWebIdentityProfile].forEach(
      (isProfileFn) => {
        vi.mocked(isProfileFn).mockReturnValue(true);
      }
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("throws error if all profile checks fail", async () => {
    [isAssumeRoleProfile, isLoginProfile, isSsoProfile, isStaticCredsProfile, isWebIdentityProfile].forEach(
      (isProfileFn) => {
        vi.mocked(isProfileFn).mockReturnValue(false);
      }
    );
    try {
      await resolveProfileData(mockProfileName, mockProfiles, mockOptions);
      fail(`expected ${mockError}`);
    } catch (error) {
      expect(error).toStrictEqual(mockError);
    }
  });

  it("resolves with static creds when profiles are previously visited and current profile has static creds", async () => {
    vi.mocked(resolveStaticCredentials).mockImplementation(() => Promise.resolve(mockCreds));
    const receivedCreds = await resolveProfileData(mockProfileName, mockProfiles, mockOptions, mockCallerConfig, {
      testProfile: true,
    });
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(resolveStaticCredentials).toHaveBeenCalledWith(mockProfiles[mockProfileName], mockOptions);
  });

  describe("resolves with assumeRole", () => {
    it("when it's static creds, but profiles are not visited", async () => {
      vi.mocked(resolveAssumeRoleCredentials).mockImplementation(() => Promise.resolve(mockCreds));
      const receivedCreds = await resolveProfileData(mockProfileName, mockProfiles, mockOptions);
      expect(receivedCreds).toStrictEqual(mockCreds);
      expect(resolveAssumeRoleCredentials).toHaveBeenCalledWith(
        mockProfileName,
        mockProfiles,
        mockOptions,
        undefined,
        {},
        resolveProfileData
      );
    });

    it("when it's not static creds, and profiles are visited", async () => {
      (isStaticCredsProfile as unknown as any).mockReturnValue(false);
      vi.mocked(resolveAssumeRoleCredentials).mockImplementation(() => Promise.resolve(mockCreds));
      const receivedCreds = await resolveProfileData(mockProfileName, mockProfiles, mockOptions, mockCallerConfig, {
        testProfile: true,
      });
      expect(receivedCreds).toStrictEqual(mockCreds);
      expect(resolveAssumeRoleCredentials).toHaveBeenCalledWith(
        mockProfileName,
        mockProfiles,
        mockOptions,
        mockCallerConfig,
        {
          testProfile: true,
        },
        resolveProfileData
      );
    });
  });

  it("resolves with static creds when no profiles are visited and it's not assume role profile", async () => {
    (isAssumeRoleProfile as unknown as any).mockReturnValue(false);
    vi.mocked(resolveStaticCredentials).mockImplementation(() => Promise.resolve(mockCreds));
    const receivedCreds = await resolveProfileData(mockProfileName, mockProfiles, mockOptions);
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(resolveStaticCredentials).toHaveBeenCalledWith(mockProfiles[mockProfileName], mockOptions);
  });

  it("resolves with web identity profile, when it's not static or assume role", async () => {
    [isAssumeRoleProfile, isStaticCredsProfile].forEach((isProfileFn) => {
      vi.mocked(isProfileFn).mockReturnValue(false);
    });
    vi.mocked(resolveWebIdentityCredentials).mockImplementation(() => Promise.resolve(mockCreds));
    const receivedCreds = await resolveProfileData(mockProfileName, mockProfiles, mockOptions);
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(resolveWebIdentityCredentials).toHaveBeenCalledWith(mockProfiles[mockProfileName], mockOptions, undefined);
  });

  it("resolves with sso profile, when it's not static or assume role or web identity", async () => {
    [isAssumeRoleProfile, isStaticCredsProfile, isWebIdentityProfile].forEach((isProfileFn) => {
      vi.mocked(isProfileFn).mockReturnValue(false);
    });
    vi.mocked(resolveSsoCredentials).mockImplementation(() => Promise.resolve(mockCreds));
    const receivedCreds = await resolveProfileData(mockProfileName, mockProfiles, mockOptions);
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(resolveSsoCredentials).toHaveBeenCalledWith(mockProfileName, {}, mockOptions, undefined);
  });

  it("resolves with login profile, when it's not static or assume role or web identity or sso", async () => {
    [isAssumeRoleProfile, isStaticCredsProfile, isWebIdentityProfile, isSsoProfile].forEach((isProfileFn) => {
      vi.mocked(isProfileFn).mockReturnValue(false);
    });
    vi.mocked(resolveLoginCredentials).mockImplementation(() => Promise.resolve(mockCreds));
    const receivedCreds = await resolveProfileData(mockProfileName, mockProfiles, mockOptions);
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(resolveLoginCredentials).toHaveBeenCalledWith(mockProfileName, mockOptions, undefined);
  });
});
