import { describe, expect, test as it, vi } from "vitest";

import { resolveS3Config } from "./s3Configuration";

describe(resolveS3Config.name, () => {
  it("maintains object custody", () => {
    const input = {};
    expect(
      resolveS3Config(input, {
        session: [() => null, vi.fn()],
      })
    ).toBe(input);
  });
});
