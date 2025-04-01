import { describe, expect, test as it } from "vitest";

import * as rdsSigner from "./index";

describe("rds-signer", () => {
  it("has Signer", () => {
    expect(rdsSigner.Signer).toBeDefined();
  });
});
