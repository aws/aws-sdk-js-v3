import { REFRESH_MESSAGE } from "@aws-sdk/token-providers/src/constants";
import { externalDataInterceptor } from "@smithy/shared-ini-file-loader";
import { homedir } from "os";
import { join } from "path";
import { describe, expect, test as it } from "vitest";

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

describe("fromSSO integration test", () => {
  it("should expand relative homedir", async () => {
    const customConfigPath = join(homedir(), "custom/path/to/config");
    const customCredentialsPath = join(homedir(), "custom/path/to/config");

    externalDataInterceptor.interceptFile(customConfigPath, SAMPLE_CONFIG);
    externalDataInterceptor.interceptFile(customCredentialsPath, SAMPLE_CONFIG);

    /**
     * todo(shared-ini-file-loader): this interception shouldn't be necessary. The "slurpFile" API
     * todo(shared-ini-file-loader): should perform the replacement of the homedir shorthand.
     * todo: loadSsoSessionData needs to also respect the ~/ replacement or this feature and test are rendered pointless.
     */
    externalDataInterceptor.interceptFile(customConfigPath.replace(homedir(), "~"), SAMPLE_CONFIG);
    externalDataInterceptor.interceptFile(customCredentialsPath.replace(homedir(), "~"), SAMPLE_CONFIG);

    externalDataInterceptor.interceptToken("my-sso", {
      accessToken: "token-contents",
      expiresAt: Date.now(),
      clientId: "my-sso",
      clientSecret: "a secret",
      refreshToken: "token",
    });

    await expect(
      fromSSO({
        profile: "dev",
        filepath: "~/custom/path/to/credentials",
        configFilepath: "~/custom/path/to/config",
      })
    ).rejects.toThrowError(`Token is expired. ${REFRESH_MESSAGE}`);
  });
});
