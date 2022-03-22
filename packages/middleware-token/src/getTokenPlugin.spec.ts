import { getTokenPlugin } from "./getTokenPlugin";
import { tokenMiddleware, TokenMiddlewareOptions } from "./tokenMiddleware";

jest.mock("./tokenMiddleware");

describe(getTokenPlugin.name, () => {
  const pluginConfig = {
    token: () =>
      Promise.resolve({
        token: "mockOutputAccessToken",
        expiration: new Date(Date.now() + 7200 * 1000),
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
    expect(commandStack.addRelativeTo).toHaveBeenCalledWith(middlewareReturn, TokenMiddlewareOptions);
    expect(tokenMiddleware).toHaveBeenCalled();
    expect(tokenMiddleware).toHaveBeenCalledWith(pluginConfig);
  });
});
