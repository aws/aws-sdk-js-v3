import { fromSSO } from "@aws-sdk/credential-providers";
import { describe } from "vitest";

import { CTest } from "./_test-lib.spec";

describe(fromSSO.name, () => {
  const ctest = new CTest({
    credentialProvider: fromSSO,
    providerParams: (testParams) => {
      return {
        ssoStartUrl: "SSO_START_URL",
        ssoAccountId: "1234567890",
        ssoRegion: "sso-region-1",
        ssoRoleName: "arn:aws:iam::1234567890:role/Rigamarole",
        ...CTest.defaultRegionConfigProvider(testParams),
      };
    },
    profileCredentials: false,
    fallbackRegion: "unresolved",
  });

  ctest.testRegion();
});
