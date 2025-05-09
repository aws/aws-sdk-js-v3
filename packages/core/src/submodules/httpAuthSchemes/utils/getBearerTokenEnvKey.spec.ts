import { describe, expect, it } from "vitest";

import { getBearerTokenEnvKey } from "./getBearerTokenEnvKey";

describe("getBearerTokenEnvKey", () => {
  it.each([
    ["SIGNING_NAME", "signing name"],
    ["SIGNING_NAME", "SigNinG nAmE"],
    ["SIGNING_NAME", "signing-name"],
    ["SIGNING_NAME", "signing\tname"],
  ])("returns AWS_BEARER_TOKEN_%s for '%s'", (output, input) => {
    expect(getBearerTokenEnvKey(input)).toEqual(`AWS_BEARER_TOKEN_${output}`);
  });
});
