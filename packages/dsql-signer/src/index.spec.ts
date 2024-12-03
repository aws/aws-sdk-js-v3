import { describe, expect, test as it } from "vitest";

import * as dsql from "./index";

describe("dsql-signer", () => {
  it("has Signer", () => {
    expect(dsql.DsqlSigner).toBeDefined();
  });
});
