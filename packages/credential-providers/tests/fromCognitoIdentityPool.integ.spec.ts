import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { describe } from "vitest";

import { CTest } from "./_test-lib.spec";

describe(fromCognitoIdentityPool.name, () => {
  const ctest = new CTest({
    credentialProvider: fromCognitoIdentityPool,
    providerParams: (testParams) => {
      return {
        identityPoolId: "us-east-1:1699ebc0-7900-4099-b910-2df94f52a030",
        ...CTest.defaultRegionConfigProvider(testParams),
      };
    },
    profileCredentials: false,
    fallbackRegion: "unresolved",
  });

  ctest.testRegion();
});
