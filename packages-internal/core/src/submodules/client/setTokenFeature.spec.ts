import { AttributedTokenIdentity } from "@aws-sdk/types";
import { describe, expect, test as it } from "vitest";

import { setTokenFeature } from "./setTokenFeature";

describe(setTokenFeature.name, () => {
  it("should create the data path if it does't exist", () => {
    const token = { token: "" } as AttributedTokenIdentity;

    expect(setTokenFeature(token, "BEARER_SERVICE_ENV_VARS", "3")).toEqual({
      token: "",
      $source: {
        BEARER_SERVICE_ENV_VARS: "3",
      },
    });
  });
});
