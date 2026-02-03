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

  it("accepts bool/num for expectContinueHeader and defaults to 2mb", () => {
    expect(
      resolveS3Config(
        {
          expectContinueHeader: 1,
        },
        {
          session: [() => null, vi.fn()],
        }
      ).expectContinueHeader
    ).toEqual(1);

    expect(
      resolveS3Config(
        {
          expectContinueHeader: false,
        },
        {
          session: [() => null, vi.fn()],
        }
      ).expectContinueHeader
    ).toEqual(false);

    expect(
      resolveS3Config(
        {},
        {
          session: [() => null, vi.fn()],
        }
      ).expectContinueHeader
    ).toEqual(2 * 1024 * 1024);
  });
});
