import { describe, expect, test as it } from "vitest";

import { resolveS3ControlConfig } from "./configurations";

describe(resolveS3ControlConfig.name, () => {
  it("maintains object custody", () => {
    const input = {} as any;
    expect(resolveS3ControlConfig(input)).toBe(input);
  });
});
