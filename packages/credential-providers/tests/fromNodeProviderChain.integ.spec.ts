import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { describe } from "vitest";

import { CTest } from "./_test-lib.spec";

describe(fromNodeProviderChain.name, () => {
  const ctest = new CTest({
    credentialProvider: fromNodeProviderChain,
    providerParams: CTest.defaultRegionConfigProvider,
    profileCredentials: true,
    fallbackRegion: "us-east-1",
  });

  ctest.testRegion();
});
