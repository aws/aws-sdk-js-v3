import { describe, expect, test as it } from "vitest";

import { isSsoProfile } from "./isSsoProfile";

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
