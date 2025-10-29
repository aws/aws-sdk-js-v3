import { fromIni } from "@aws-sdk/credential-providers";
import { describe } from "vitest";

import { CTest } from "./_test-lib.spec";

describe(fromIni.name, () => {
  const ctest = new CTest({
    credentialProvider: fromIni,
    providerParams: CTest.defaultRegionConfigProvider,
    profileCredentials: true,
    fallbackRegion: "us-east-1",
  });

  ctest.testRegion();
});
