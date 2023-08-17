import { endpointDiscoveryMiddleware } from "./endpointDiscoveryMiddleware";
import { endpointDiscoveryMiddlewareOptions, getEndpointDiscoveryPlugin } from "./getEndpointDiscoveryPlugin";

jest.mock("./endpointDiscoveryMiddleware");

describe(getEndpointDiscoveryPlugin.name, () => {
  const pluginConfig = {
    isCustomEndpoint: false,
    endpointCache: jest.fn(),
    endpointDiscoveryEnabled: jest.fn(),
    isClientEndpointDiscoveryEnabled: false,
  };
  const middlewareConfig = {
    isDiscoveredEndpointRequired: false,
  };

  it(`applyToStack function adds endpoint discovery middleware`, () => {
    const middlewareReturn = {};
    (endpointDiscoveryMiddleware as jest.Mock).mockReturnValueOnce(middlewareReturn);

    // @ts-ignore
    const plugin = getEndpointDiscoveryPlugin(pluginConfig, middlewareConfig);
    const commandStack = { add: jest.fn() };

    // @ts-ignore
    plugin.applyToStack(commandStack);
    expect(commandStack.add).toHaveBeenCalled();
    expect(commandStack.add).toHaveBeenCalledWith(middlewareReturn, endpointDiscoveryMiddlewareOptions);
    expect(endpointDiscoveryMiddleware).toHaveBeenCalled();
    expect(endpointDiscoveryMiddleware).toHaveBeenCalledWith(pluginConfig, middlewareConfig);
  });
});
