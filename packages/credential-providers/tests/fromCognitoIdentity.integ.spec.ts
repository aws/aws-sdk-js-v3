import { fromCognitoIdentity } from "@aws-sdk/credential-providers";
import { describe } from "vitest";

import { CTest } from "./_test-lib.spec";

describe(fromCognitoIdentity.name, () => {
  const ctest = new CTest({
    credentialProvider: fromCognitoIdentity,
    providerParams: (testParams) => {
      return {
        identityId: "us-east-1:128d0a74-c82f-4553-916d-90053example",
        ...CTest.defaultRegionConfigProvider(testParams),
      };
    },
    profileCredentials: false,
    fallbackRegion: "unresolved",
  });

  ctest.testRegion();
});
