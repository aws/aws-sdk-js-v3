import { describe, expect, test as it, vi } from "vitest";

import { injectSessionIdMiddleware } from "./middleware-session-id";

describe(injectSessionIdMiddleware.name, () => {
  const mockNextHandler = vi.fn().mockResolvedValue({ output: {} });
  it("should populate the SessionId parameter in response", async () => {
    const mw = injectSessionIdMiddleware();
    const { output } = await mw(mockNextHandler as any, {} as any)({ input: { SessionId: "ID" } });
    expect(output).toMatchObject({ SessionId: "ID" });
  });
});
