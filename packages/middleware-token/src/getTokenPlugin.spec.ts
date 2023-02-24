import { getTokenPlugin } from "./getTokenPlugin";
import { tokenMiddleware, tokenMiddlewareOptions } from "./tokenMiddleware";

jest.mock("./tokenMiddleware");

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
    (tokenMiddleware as jest.Mock).mockReturnValueOnce(middlewareReturn);

    // @ts-ignore
    const plugin = getTokenPlugin(pluginConfig);
    const commandStack = { addRelativeTo: jest.fn() };

    // @ts-ignore
    plugin.applyToStack(commandStack);
    expect(commandStack.addRelativeTo).toHaveBeenCalledWith(middlewareReturn, tokenMiddlewareOptions);
    expect(tokenMiddleware).toHaveBeenCalled();
    expect(tokenMiddleware).toHaveBeenCalledWith(pluginConfig);
  });
});
