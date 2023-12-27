import { compressionMiddleware, compressionMiddlewareOptions } from "./compressionMiddleware";
import { getCompressionPlugin } from "./getCompressionPlugin";

jest.mock("./compressionMiddleware");

const ONE_HOUR_IN_MS = 3600 * 1000;

describe(getCompressionPlugin.name, () => {
  const pluginConfig = {
    requestCompressionEnabled: true,
    minimumCompressionSize: 1024,
  };

  it("applyToStack adds compressionMiddleware", () => {
    const middlewareReturn = {};
    (compressionMiddleware as jest.Mock).mockReturnValueOnce(middlewareReturn);

    // @ts-ignore
    const plugin = getCompressionPlugin(pluginConfig);
    const commandStack = { add: jest.fn() };

    // @ts-ignore
    plugin.applyToStack(commandStack);
    expect(commandStack.add).toHaveBeenCalledWith(middlewareReturn, compressionMiddlewareOptions);
    expect(compressionMiddleware).toHaveBeenCalled();
    expect(compressionMiddleware).toHaveBeenCalledWith(pluginConfig);
  });
});
