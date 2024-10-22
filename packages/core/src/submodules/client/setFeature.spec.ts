import { AwsHandlerExecutionContext } from "@aws-sdk/types";
import { describe, test as it } from "vitest";

import { setFeature } from "./setFeature";

describe(setFeature.name, () => {
  it("creates the context object path if needed", () => {
    const context: AwsHandlerExecutionContext = {};
    setFeature(context, "ACCOUNT_ID_ENDPOINT", "O");
  });
});
