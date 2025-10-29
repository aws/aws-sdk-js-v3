import { fromWebToken } from "@aws-sdk/credential-providers";
import { describe } from "vitest";

import { CTest } from "./_test-lib.spec";

describe(fromWebToken.name, () => {
  const ctest = new CTest({
    credentialProvider: fromWebToken,
    providerParams: (testParams) => {
      return {
        webIdentityToken: "token-contents",
        roleArn: "arn:aws:iam::1234567890:role/Rigamarole",
        ...CTest.defaultRegionConfigProvider(testParams),
      };
    },
    profileCredentials: false,
    fallbackRegion: "us-east-1",
  });

  ctest.testRegion();
});
