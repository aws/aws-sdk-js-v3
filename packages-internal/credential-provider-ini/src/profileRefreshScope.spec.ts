import { describe, expect, it } from "vitest";

import { isProfileInCredentialRefreshScope } from "./resolveProfileData";

describe("isProfileInCredentialRefreshScope", () => {
  it.each([
    ["AssumeRole", { role_arn: "arn:aws:iam::123456789012:role/Test", source_profile: "source" }],
    ["web identity", { role_arn: "arn:aws:iam::123456789012:role/Test", web_identity_token_file: "/token" }],
    ["SSO", { sso_session: "dev", sso_account_id: "123456789012", sso_role_name: "Role" }],
    ["Login", { login_session: "session" }],
  ])("puts %s in the credential refresh lifecycle", (_label, profile) => {
    expect(isProfileInCredentialRefreshScope(profile, "test")).toBe(true);
  });

  it.each([
    ["static credentials", { aws_access_key_id: "AKID", aws_secret_access_key: "SECRET" }],
    ["credential_process", { credential_process: "/bin/get-credentials" }],
    ["an unknown profile", { region: "us-west-2" }],
    ["a missing profile", undefined],
  ])("keeps %s on existing behavior", (_label, profile) => {
    expect(isProfileInCredentialRefreshScope(profile, "test")).toBe(false);
  });

  it("uses AssumeRole precedence when a profile also contains static credentials", () => {
    const profile = {
      role_arn: "arn:aws:iam::123456789012:role/Test",
      source_profile: "source",
      aws_access_key_id: "AKID",
      aws_secret_access_key: "SECRET",
    };

    expect(isProfileInCredentialRefreshScope(profile, "test")).toBe(true);
  });
});
