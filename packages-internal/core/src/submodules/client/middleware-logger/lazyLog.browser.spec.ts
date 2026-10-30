import { describe, expect, test as it, vi } from "vitest";

import { lazyLog } from "./lazyLog.browser";

describe(lazyLog.name, () => {
  it("defers enumerable getters until the log is materialized", () => {
    const get = vi.fn(() => "value");
    const log = lazyLog({
      get field() {
        return get();
      },
    });

    expect(get).not.toHaveBeenCalled();
    expect(JSON.parse(JSON.stringify(log))).toEqual({ field: "value" });
    expect(get).toHaveBeenCalledOnce();
    expect(Symbol.for("nodejs.util.inspect.custom") in log).toBe(false);
  });
});
