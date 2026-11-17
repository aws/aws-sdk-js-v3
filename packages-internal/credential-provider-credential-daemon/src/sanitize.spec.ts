import { describe, expect, test as it } from "vitest";

import { sanitize } from "./sanitize";

describe(sanitize.name, () => {
  it("removes C0, DEL and C1 control characters", () => {
    expect(sanitize("a\u0000b\u001fc\u007fd\u0080e\u009ff g")).toBe("abcdef g");
  });
});
