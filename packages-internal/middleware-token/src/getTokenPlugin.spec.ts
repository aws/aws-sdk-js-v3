import { describe, expect, test as it, vi } from "vitest";

import { getTokenPlugin } from "./getTokenPlugin";
import { tokenMiddleware, tokenMiddlewareOptions } from "./tokenMiddleware";

vi.mock("./tokenMiddleware");

const ONE_HOUR_IN_MS = 3600 * 1000;

describe(getTokenPlugin.name, () => {
  const pluginConfig = {
    token: () =>
      Promise.resolve({
        token: "mockOutputAccessToken",
        expiration: new Date(Date.now() + 2 * ONE_HOUR_IN_MS),
      }),
  };

  it("applyToStack adds tokenMiddleware", () => {
    const middlewareReturn = {};
    vi.mocked(tokenMiddleware).mockReturnValueOnce(middlewareReturn as any);

    // @ts-ignore
    const plugin = getTokenPlugin(pluginConfig);
    const commandStack = { addRelativeTo: vi.fn() };

    // @ts-ignore
    plugin.applyToStack(commandStack);
    expect(commandStack.addRelativeTo).toHaveBeenCalledWith(middlewareReturn, tokenMiddlewareOptions);
    expect(tokenMiddleware).toHaveBeenCalled();
    expect(tokenMiddleware).toHaveBeenCalledWith(pluginConfig);
  });
});
