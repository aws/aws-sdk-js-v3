import { CredentialsProviderError } from "@smithy/property-provider";

import { validateSsoProfile } from "./validateSsoProfile";

describe(validateSsoProfile.name, () => {
  const getMockSsoProfile = () => ({
    sso_start_url: "mock_sso_start_url",
    sso_account_id: "mock_sso_account_id",
    sso_region: "mock_sso_region",
    sso_role_name: "mock_sso_role_name",
  });

  it("returns if values all required sso values are available", () => {
    const profileToVerify = getMockSsoProfile();
    const profileVerified = validateSsoProfile(profileToVerify);
    expect(profileVerified).toStrictEqual(profileToVerify);
  });

  it.each(["sso_start_url", "sso_account_id", "sso_region", "sso_role_name"])(
    "throws if '%s' is missing from profile",
    (key) => {
      const profileToVerify = getMockSsoProfile();
      delete profileToVerify[key];

      expect(() => {
        validateSsoProfile(profileToVerify);
      }).toThrowError(
        new CredentialsProviderError(
          `Profile is configured with invalid SSO credentials. Required parameters ` +
            `"sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profileToVerify).join(
              ", "
            )}\nReference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`,
          false
        )
      );
    }
  );

  it.each(["sso_session"])("does not throw if '%s' is missing from profile", (key) => {
    const profileToVerify = getMockSsoProfile();
    delete profileToVerify[key];

    expect(() => {
      validateSsoProfile(profileToVerify);
    }).not.toThrowError();
  });
});
