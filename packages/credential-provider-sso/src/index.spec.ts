jest.useFakeTimers("modern");
const now = 1613699814645;
jest.setSystemTime(now);

const mockParseKnownFiles = jest.fn();
const mockGetMasterProfileName = jest.fn();
jest.mock("@aws-sdk/util-credentials", () => ({
  parseKnownFiles: mockParseKnownFiles,
  getMasterProfileName: mockGetMasterProfileName,
}));

const mockReadFileSync = jest.fn();
jest.mock("fs", () => ({ readFileSync: mockReadFileSync }));

const mockRoleCredentials = {
  roleCredentials: {
    accessKeyId: "key",
    secretAccessKey: "secret",
    sessionToken: "token",
    expiration: Date.now(),
  },
};
const mockSSOSend = jest.fn().mockReturnValue(Promise.resolve(mockRoleCredentials));
const mockGetRoleCredentialsCommand = jest.fn();
jest.mock("@aws-sdk/client-sso", () => ({
  SSOClient: function () {
    return { send: mockSSOSend };
  },
  GetRoleCredentialsCommand: mockGetRoleCredentialsCommand,
}));

import { EXPIRE_WINDOW_MS, fromSSO } from "./index";

const toRFC3339String = (date: number): string => {
  const timestamp = new Date(date).toISOString();
  return timestamp.replace(/\.[\d]+Z$/, "Z");
};

describe("fromSSO()", () => {
  const ssoStartUrl = "https:some-url/start";
  const ssoAccountId = "1234567890";
  const ssoRegion = "us-foo-1";
  const ssoRoleName = "some-role";
  const token = {
    startUrl: ssoStartUrl,
    region: ssoRegion,
    accessToken: "base64 encoded string",
    expiresAt: toRFC3339String(now + 60 * 60 * 1000),
  };

  beforeEach(() => {
    mockParseKnownFiles.mockClear();
    mockGetMasterProfileName.mockClear();
    mockReadFileSync.mockClear();
    mockSSOSend.mockClear();
  });

  describe("load from shared config file", () => {
    const ssoConfig = {
      sso_start_url: ssoStartUrl,
      sso_account_id: ssoAccountId,
      sso_region: ssoRegion,
      sso_role_name: ssoRoleName,
    };

    it("should fetch credentials from resolved token file", async () => {
      mockParseKnownFiles.mockReturnValue(Promise.resolve({ default: ssoConfig }));
      mockGetMasterProfileName.mockReturnValue("default");
      mockReadFileSync.mockReturnValue(JSON.stringify(token));
      const { roleCredentials } = mockRoleCredentials;
      expect(await fromSSO()()).toEqual({ ...roleCredentials, expiration: new Date(roleCredentials.expiration) });
      expect(mockReadFileSync.mock.calls[0][0]).toEqual(
        expect.stringMatching(/fcab95d6966151d97d9ee7776a90d895b5e5fbe6.json$/)
      );
      expect(mockReadFileSync.mock.calls[0][1]).toMatchObject({ encoding: "utf-8" });
      expect(mockGetRoleCredentialsCommand).toHaveBeenCalledWith({
        accountId: ssoConfig.sso_account_id,
        roleName: ssoConfig.sso_role_name,
        accessToken: token.accessToken,
      });
    });

    it("should allow supplying custom client", async () => {
      mockParseKnownFiles.mockReturnValue(Promise.resolve({ default: ssoConfig }));
      mockGetMasterProfileName.mockReturnValue("default");
      mockReadFileSync.mockReturnValue(JSON.stringify(token));
      const newSSOClient = { send: jest.fn().mockReturnValue(Promise.resolve(mockRoleCredentials)) };
      //@ts-expect-error
      await fromSSO({ ssoClient: newSSOClient })();
      expect(newSSOClient.send).toHaveBeenCalled();
      expect(mockSSOSend).not.toHaveBeenCalled();
    });

    it("should throw if profile doesn't exist in the config files", () => {
      const profile = "exist";
      mockParseKnownFiles.mockReturnValue(Promise.resolve({ non_exist: { foo: "bar" } }));
      mockGetMasterProfileName.mockReturnValue(profile);
      return expect(async () => {
        await fromSSO()();
      }).rejects.toMatchObject({
        name: "CredentialsProviderError",
        message: expect.stringContaining("Profile exist is not configured with SSO credentials"),
        tryNextLink: true,
      });
    });

    it("should throw if profile is not configured with SSO credential", () => {
      const profile = "exist";
      mockParseKnownFiles.mockReturnValue(Promise.resolve({ [profile]: { foo: "bar" } }));
      mockGetMasterProfileName.mockReturnValue(profile);
      return expect(async () => {
        await fromSSO()();
      }).rejects.toMatchObject({
        message: `Profile ${profile} is not configured with SSO credentials.`,
        tryNextLink: true,
      });
    });

    it.each(Object.keys(ssoConfig))("should throw if sso configuration is missing %s", async (keyToRemove) => {
      expect.assertions(2);
      const config = { ...ssoConfig };
      //@ts-ignore
      delete config[keyToRemove];
      mockParseKnownFiles.mockReturnValue(Promise.resolve({ default: config }));
      mockGetMasterProfileName.mockReturnValue("default");
      try {
        await fromSSO()();
      } catch (e) {
        expect(e.message).toContain("Profile is configured with invalid SSO credentials.");
        expect(e.tryNextLink).toBeFalsy();
      }
    });

    it("should throw if token cache file is not found", async () => {
      expect.assertions(2);
      mockReadFileSync.mockImplementation(() => {
        throw new Error("File not found.");
      });
      mockParseKnownFiles.mockReturnValue(Promise.resolve({ default: ssoConfig }));
      mockGetMasterProfileName.mockReturnValue("default");
      try {
        await fromSSO()();
      } catch (e) {
        expect(e.message).toContain(
          "The SSO session associated with this profile has expired or is otherwise invalid."
        );
        expect(e.tryNextLink).toBeFalsy();
      }
    });

    it("should throw if token cache file is invalid", async () => {
      expect.assertions(2);
      mockReadFileSync.mockReturnValue("invalid JSON content");
      mockParseKnownFiles.mockReturnValue(Promise.resolve({ default: ssoConfig }));
      mockGetMasterProfileName.mockReturnValue("default");
      try {
        await fromSSO()();
      } catch (e) {
        expect(e.message).toContain(
          "The SSO session associated with this profile has expired or is otherwise invalid."
        );
        expect(e.tryNextLink).toBeFalsy();
      }
    });

    it("should throw if token cache is expired", async () => {
      expect.assertions(2);
      mockReadFileSync.mockReturnValue({ ...token, expiration: toRFC3339String(now + EXPIRE_WINDOW_MS - 2) });
      mockParseKnownFiles.mockReturnValue(Promise.resolve({ default: ssoConfig }));
      mockGetMasterProfileName.mockReturnValue("default");
      try {
        await fromSSO()();
      } catch (e) {
        expect(e.message).toContain(
          "The SSO session associated with this profile has expired or is otherwise invalid."
        );
        expect(e.tryNextLink).toBeFalsy();
      }
    });

    it("should throw if SSO client throws", async () => {
      expect.assertions(3);
      mockParseKnownFiles.mockReturnValue(Promise.resolve({ default: ssoConfig }));
      mockGetMasterProfileName.mockReturnValue("default");
      mockReadFileSync.mockReturnValue(JSON.stringify(token));
      const clientError = new Error("No account is found for the user");
      //@ts-ignore
      clientError.$fault = "client";
      mockSSOSend.mockImplementation(async () => {
        throw clientError;
      });
      try {
        await fromSSO()();
      } catch (e) {
        expect(e.message).toContain(clientError.message);
        expect(e.tryNextLink).toBeFalsy();
        expect(e.$fault).toBe("client");
      }
    });

    it("should throw if credentials from SSO client is invalid", async () => {
      expect.assertions(2);
      mockReadFileSync.mockReturnValue(JSON.stringify(token));
      mockParseKnownFiles.mockReturnValue(Promise.resolve({ default: ssoConfig }));
      mockGetMasterProfileName.mockReturnValue("default");
      mockSSOSend.mockResolvedValue({
        roleCredentials: { ...mockRoleCredentials.roleCredentials, accessKeyId: undefined },
      });
      try {
        await fromSSO()();
      } catch (e) {
        expect(e.message).toContain("SSO returns an invalid temporary credential.");
        expect(e.tryNextLink).toBeFalsy();
      } finally {
        mockSSOSend.mockResolvedValue(mockRoleCredentials);
      }
    });
  });

  describe("load with sso parameters", () => {
    it("should fetch credentials from resolved token file without reading shared config file", async () => {
      mockParseKnownFiles.mockRejectedValue("Should not call parseKnownFiles()");
      mockGetMasterProfileName.mockRejectedValue("Should not call getMasterProfileName()");
      mockReadFileSync.mockReturnValue(JSON.stringify(token));
      const { roleCredentials } = mockRoleCredentials;
      expect(
        await fromSSO({
          ssoStartUrl,
          ssoAccountId,
          ssoRegion,
          ssoRoleName,
        })()
      ).toEqual({ ...roleCredentials, expiration: new Date(roleCredentials.expiration) });
      expect(mockReadFileSync.mock.calls[0][0]).toEqual(
        expect.stringMatching(/fcab95d6966151d97d9ee7776a90d895b5e5fbe6.json$/)
      );
      expect(mockReadFileSync.mock.calls[0][1]).toMatchObject({ encoding: "utf-8" });
      expect(mockGetRoleCredentialsCommand).toHaveBeenCalledWith({
        accountId: ssoAccountId,
        roleName: ssoRoleName,
        accessToken: token.accessToken,
      });
    });

    it.each(["ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"])(
      "should throw for incomplete sso parameters(missing %s)",
      (undefinedKey) => {
        mockParseKnownFiles.mockRejectedValue("Should not call parseKnownFiles()");
        mockGetMasterProfileName.mockRejectedValue("Should not call getMasterProfileName()");
        mockReadFileSync.mockReturnValue(JSON.stringify(token));
        return expect(
          async () =>
            await fromSSO({
              ssoStartUrl,
              ssoAccountId,
              ssoRegion,
              ssoRoleName,
              ...{ [undefinedKey]: undefined },
            } as any)()
        ).rejects.toMatchObject({
          name: "CredentialsProviderError",
          message: expect.stringMatching("Incomplete configuration"),
        });
      }
    );
  });
});
