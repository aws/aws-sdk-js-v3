import { describe, expect, test as it, vi } from "vitest";

import { endpointDiscoveryMiddleware } from "./endpointDiscoveryMiddleware";
import { endpointDiscoveryMiddlewareOptions, getEndpointDiscoveryPlugin } from "./getEndpointDiscoveryPlugin";

vi.mock("./endpointDiscoveryMiddleware");

describe(getEndpointDiscoveryPlugin.name, () => {
  const pluginConfig = {
    isCustomEndpoint: false,
    endpointCache: vi.fn(),
    endpointDiscoveryEnabled: vi.fn(),
    isClientEndpointDiscoveryEnabled: false,
  };
  const middlewareConfig = {
    isDiscoveredEndpointRequired: false,
  };

  it(`applyToStack function adds endpoint discovery middleware`, () => {
    const middlewareReturn = {};
    vi.mocked(endpointDiscoveryMiddleware).mockReturnValueOnce(middlewareReturn as any);

    // @ts-ignore
    const plugin = getEndpointDiscoveryPlugin(pluginConfig, middlewareConfig);
    const commandStack = { add: vi.fn() };

    // @ts-ignore
    plugin.applyToStack(commandStack);
    expect(commandStack.add).toHaveBeenCalled();
    expect(commandStack.add).toHaveBeenCalledWith(middlewareReturn, endpointDiscoveryMiddlewareOptions);
    expect(endpointDiscoveryMiddleware).toHaveBeenCalled();
    expect(endpointDiscoveryMiddleware).toHaveBeenCalledWith(pluginConfig, middlewareConfig);
  });
});
