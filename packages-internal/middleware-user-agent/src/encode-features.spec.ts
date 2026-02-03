import { describe, expect, test as it } from "vitest";

import { encodeFeatures } from "./encode-features";

describe(encodeFeatures.name, () => {
  it("encodes empty features", () => {
    expect(encodeFeatures({})).toEqual("");
  });

  it("encodes features", () => {
    expect(
      encodeFeatures({
        A: "A",
        z: "z",
      } as any)
    ).toEqual("A,z");
  });

  it("drops values that would exceed 1024 bytes", () => {
    expect(
      encodeFeatures({
        A: "A".repeat(512),
        B: "B".repeat(511),
        z: "z",
      } as any)
    ).toEqual("A".repeat(512) + "," + "B".repeat(511));
  });
});
