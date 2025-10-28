import { fromIni } from "@aws-sdk/credential-providers";
import { describe } from "vitest";

import { CTest } from "./_test-lib.spec";

describe(fromIni.name, () => {
  const ctest = new CTest(fromIni, CTest.defaultRegionConfigProvider, true);

  ctest.testRegion();
});
