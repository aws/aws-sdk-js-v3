import { fromSSO } from "@aws-sdk/credential-provider-sso";
import { AwsCredentialIdentity } from "@smithy/types";

import { isSsoProfile, resolveSsoCredentials } from "./resolveSsoCredentials";

jest.mock("@aws-sdk/credential-provider-sso");

describe(isSsoProfile.name, () => {
  it("returns false for empty profile", () => {
    expect(isSsoProfile({})).toEqual(false);
  });

  it.each(["sso_start_url", "sso_account_id", "sso_region", "sso_session", "sso_role_name"])(
    "returns true if value at '%s' is of type string",
    (key) => {
      expect(isSsoProfile({ [key]: "string" })).toEqual(true);
    }
  );
});

describe(resolveSsoCredentials.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("throws error when fromSSO throws error", async () => {
    const mockProfileName = "mockProfileName";
    const expectedError = new Error("error from fromSSO");

    (fromSSO as jest.Mock).mockReturnValue(() => Promise.reject(expectedError));

    try {
      await resolveSsoCredentials(mockProfileName, {});
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(fromSSO).toHaveBeenCalledWith({
      profile: mockProfileName,
    });
  });

  it("calls fromSSO", async () => {
    const mockProfileName = "mockProfileName";
    const mockCreds: AwsCredentialIdentity = {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
    };

    (fromSSO as jest.Mock).mockReturnValue(() => Promise.resolve(mockCreds));

    const receivedCreds = await resolveSsoCredentials(mockProfileName, {});
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(fromSSO).toHaveBeenCalledWith({
      profile: mockProfileName,
    });
  });
});
