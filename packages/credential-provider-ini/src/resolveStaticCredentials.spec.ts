import { describe, expect, test as it } from "vitest";

import { isStaticCredsProfile, resolveStaticCredentials } from "./resolveStaticCredentials";

const getMockStaticCredsProfile = () => ({
  aws_access_key_id: "mock_aws_access_key_id",
  aws_secret_access_key: "mock_aws_secret_access_key",
  aws_session_token: "mock_aws_session_token",
  aws_credential_scope: "mock_aws_credential_scope",
  aws_account_id: "mock_aws_account_id",
});

describe(isStaticCredsProfile.name, () => {
  describe("returns false for falsy values", () => {
    it.each([false, 0, -0, "", null, undefined, NaN])("%s:", (falsyValue) => {
      expect(isStaticCredsProfile(falsyValue)).toEqual(false);
    });
  });

  describe("returns false for data type which is not an object", () => {
    it.each([true, 1, "string"])("%s:", (notObject) => {
      expect(isStaticCredsProfile(notObject)).toEqual(false);
    });
  });

  it.each(["aws_access_key_id", "aws_secret_access_key"])("value at '%s' is not of type string", (key) => {
    [true, null, undefined, 1, NaN, {}].forEach((value) => {
      expect(isStaticCredsProfile({ ...getMockStaticCredsProfile(), [key]: value })).toEqual(false);
    });
  });

  it.each(["aws_session_token"])("value at '%s' is not of type string | undefined", (key) => {
    [true, null, 1, NaN, {}].forEach((value) => {
      expect(isStaticCredsProfile({ ...getMockStaticCredsProfile(), [key]: value })).toEqual(false);
    });
  });

  it.each(["aws_account_id"])("value at '%s' is not of type string | undefined", (key) => {
    [true, null, 1, NaN, {}].forEach((value) => {
      expect(isStaticCredsProfile({ ...getMockStaticCredsProfile(), [key]: value })).toEqual(false);
    });
  });

  it("returns true for StaticCredentialsProfile", () => {
    expect(isStaticCredsProfile(getMockStaticCredsProfile())).toEqual(true);
  });
});

describe(resolveStaticCredentials.name, () => {
  it("resolves static credentials", async () => {
    const mockProfile = getMockStaticCredsProfile();
    const receivedCreds = await resolveStaticCredentials(mockProfile);
    expect(receivedCreds).toStrictEqual({
      accessKeyId: mockProfile.aws_access_key_id,
      secretAccessKey: mockProfile.aws_secret_access_key,
      sessionToken: mockProfile.aws_session_token,
      credentialScope: mockProfile.aws_credential_scope,
      accountId: mockProfile.aws_account_id,
      $source: {
        CREDENTIALS_PROFILE: "n",
      },
    });
  });
});
