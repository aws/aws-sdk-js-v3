jest.useFakeTimers("modern");
const now = 1613699814645;
jest.setSystemTime(now);

const mockParseKnowFiles = jest.fn();
const mockGetMasterProfileName = jest.fn();
jest.mock("@aws-sdk/credential-provider-ini", () => ({
  parseKnownFiles: mockParseKnowFiles,
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

describe("fromSSO", () => {
  const ssoConfig = {
    sso_start_url: "https:some-url/start",
    sso_account_id: "1234567890",
    sso_region: "us-foo-1",
    sso_role_name: "some-role",
  };
  const token = {
    startUrl: ssoConfig.sso_start_url,
    region: ssoConfig.sso_region,
    accessToken: "base64 encoded string",
    expiresAt: toRFC3339String(now + 60 * 60 * 1000),
  };
  beforeEach(() => {
    mockParseKnowFiles.mockClear();
    mockGetMasterProfileName.mockClear();
    mockReadFileSync.mockClear();
    mockSSOSend.mockClear();
  });

  it("should fetch credentials from resolved token file", async () => {
    mockParseKnowFiles.mockReturnValue(Promise.resolve({ default: ssoConfig }));
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
    mockParseKnowFiles.mockReturnValue(Promise.resolve({ default: ssoConfig }));
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
    mockParseKnowFiles.mockReturnValue(Promise.resolve({ non_exist: { foo: "bar" } }));
    mockGetMasterProfileName.mockReturnValue(profile);
    return expect(async () => {
      await fromSSO()();
    }).rejects.toMatchObject({
      message: `Profile ${profile} could not be found in shared credentials file.`,
      tryNextLink: true,
    });
  });

  it("should throw if profile is not configured with SSO credential", () => {
    const profile = "exist";
    mockParseKnowFiles.mockReturnValue(Promise.resolve({ [profile]: { foo: "bar" } }));
    mockGetMasterProfileName.mockReturnValue(profile);
    return expect(async () => {
      await fromSSO()();
    }).rejects.toMatchObject({
      message: `Profile ${profile} is not configured with SSO credentials.`,
      tryNextLink: true,
    });
  });

  for (let i = 0; i < Object.keys(ssoConfig).length; i++) {
    const keyToRemove = Object.keys(ssoConfig)[i];
    it(`should throw if sso configuration is missing ${keyToRemove}`, async () => {
      expect.assertions(2);
      const config = { ...ssoConfig };
      //@ts-ignore
      delete config[keyToRemove];
      mockParseKnowFiles.mockReturnValue(Promise.resolve({ default: config }));
      mockGetMasterProfileName.mockReturnValue("default");
      try {
        await fromSSO()();
      } catch (e) {
        expect(e.message).toContain("Profile default does not have valid SSO credentials.");
        expect(e.tryNextLink).toBeFalsy();
      }
    });
  }

  it("should throw if token cache file is not found", async () => {
    expect.assertions(2);
    mockReadFileSync.mockImplementation(() => {
      throw new Error("File not found.");
    });
    mockParseKnowFiles.mockReturnValue(Promise.resolve({ default: ssoConfig }));
    mockGetMasterProfileName.mockReturnValue("default");
    try {
      await fromSSO()();
    } catch (e) {
      expect(e.message).toContain("The SSO session associated with this profile has expired or is otherwise invalid.");
      expect(e.tryNextLink).toBeFalsy();
    }
  });

  it("should throw if token cache file is invalid", async () => {
    expect.assertions(2);
    mockReadFileSync.mockReturnValue("invalid JSON content");
    mockParseKnowFiles.mockReturnValue(Promise.resolve({ default: ssoConfig }));
    mockGetMasterProfileName.mockReturnValue("default");
    try {
      await fromSSO()();
    } catch (e) {
      expect(e.message).toContain("The SSO session associated with this profile has expired or is otherwise invalid.");
      expect(e.tryNextLink).toBeFalsy();
    }
  });

  it("should throw if token cache is expired", async () => {
    expect.assertions(2);
    mockReadFileSync.mockReturnValue({ ...token, expiration: toRFC3339String(now + EXPIRE_WINDOW_MS - 2) });
    mockParseKnowFiles.mockReturnValue(Promise.resolve({ default: ssoConfig }));
    mockGetMasterProfileName.mockReturnValue("default");
    try {
      await fromSSO()();
    } catch (e) {
      expect(e.message).toContain("The SSO session associated with this profile has expired or is otherwise invalid.");
      expect(e.tryNextLink).toBeFalsy();
    }
  });

  it("should throw if SSO client throws", async () => {
    expect.assertions(3);
    mockParseKnowFiles.mockReturnValue(Promise.resolve({ default: ssoConfig }));
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
    mockParseKnowFiles.mockReturnValue(Promise.resolve({ default: ssoConfig }));
    mockGetMasterProfileName.mockReturnValue("default");
    mockSSOSend.mockResolvedValue({
      roleCredentials: { ...mockRoleCredentials.roleCredentials, accessKeyId: undefined },
    });
    try {
      await fromSSO()();
    } catch (e) {
      expect(e.message).toContain("SSO returns an invalid temporary credential.");
      expect(e.tryNextLink).toBeFalsy();
    }
  });
});
