import { fromEnv } from "@aws-sdk/credential-providers";
import { describe, test as it } from "vitest";

import { CTest } from "./_test-lib.spec";

describe(fromEnv.name, () => {
  const ctest = new CTest({
    credentialProvider: fromEnv,
    providerParams: () => {
      return {};
    },
  });

  it("placeholder", () => {});
});
