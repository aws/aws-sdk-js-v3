import { promises } from "fs";
import { homedir } from "os";
import { join } from "path";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromSSO } from "./fromSSO";

const SAMPLE_CONFIG = `[profile dev]
sso_session = my-sso
sso_account_id = 111122223333
sso_role_name = SampleRole

[sso-session my-sso]
sso_region = us-east-1
sso_start_url = https://my-sso-portal.awsapps.com/start
sso_registration_scopes = sso:account:access
`;

vi.mock("fs", () => ({ promises: { readFile: vi.fn() } }));

describe("fromSSO integration test", () => {
  beforeEach(() => {
    vi.mocked(promises.readFile).mockResolvedValue(SAMPLE_CONFIG);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should expand relative homedir", async () => {
    try {
      await fromSSO({
        profile: "dev",
        filepath: "~/custom/path/to/credentials",
        configFilepath: "~/custom/path/to/config",
      })();
    } catch (ignored) {}

    expect(promises.readFile).toHaveBeenCalledWith(join(homedir(), "custom/path/to/credentials"), "utf8");
    expect(promises.readFile).toHaveBeenCalledWith(join(homedir(), "custom/path/to/config"), "utf8");
  });
});
