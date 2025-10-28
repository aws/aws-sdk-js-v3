import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { describe } from "vitest";

import { CTest } from "./_test-lib.spec";

describe(fromNodeProviderChain.name, () => {
  const ctest = new CTest(fromNodeProviderChain, CTest.defaultRegionConfigProvider, true);

  ctest.testRegion();
});
