import fs from "fs";
import { homedir } from "os";
import { join } from "path";

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

jest.mock("fs", () => {
  return {
    promises: {
      readFile: jest.fn(),
    },
  };
});

describe("fromSSO integration test", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should expand relative homedir", async () => {
    const mockReadFile = (fs.promises.readFile as jest.Mock).mockResolvedValue(SAMPLE_CONFIG);

    try {
      await fromSSO({
        profile: "dev",
        filepath: "~/custom/path/to/credentials",
        configFilepath: "~/custom/path/to/config",
      })();
    } catch (ignored) {}

    expect(mockReadFile).toHaveBeenCalledWith(join(homedir(), "custom/path/to/credentials"), "utf8");
    expect(mockReadFile).toHaveBeenCalledWith(join(homedir(), "custom/path/to/config"), "utf8");
  });
});
