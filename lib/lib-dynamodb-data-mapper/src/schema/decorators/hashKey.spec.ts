import { beforeEach, describe, expect, it, vi } from "vitest";

import { hashKey } from "./hashKey";

vi.mock("./attribute", () => ({ attribute: vi.fn() }));
import { attribute } from "./attribute";

describe("hashKey", () => {
  beforeEach(() => {
    (attribute as any).mockClear();
  });

  it("should call attribute with a defined keyType", () => {
    hashKey();

    expect((attribute as any).mock.calls.length).toBe(1);
    expect((attribute as any).mock.calls[0]).toEqual([{ keyType: "HASH" }]);
  });

  it("should pass through any supplied parameters", () => {
    const attributeName = "foo";
    hashKey({ attributeName });

    expect((attribute as any).mock.calls[0][0]).toMatchObject({ attributeName });
  });
});
