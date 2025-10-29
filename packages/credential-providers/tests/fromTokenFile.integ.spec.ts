import { fromTokenFile } from "@aws-sdk/credential-providers";
import { describe } from "vitest";

import { CTest } from "./_test-lib.spec";

describe(fromTokenFile.name, () => {
  const ctest = new CTest({
    credentialProvider: fromTokenFile,
    providerParams: (testParams) => {
      return {
        webIdentityTokenFile: "token-filepath",
        roleArn: "arn:aws:iam::1234567890:role/Rigamarole",
        ...CTest.defaultRegionConfigProvider(testParams),
      };
    },
    profileCredentials: false,
    fallbackRegion: "us-east-1",
  });

  ctest.testRegion();
});
