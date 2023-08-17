import { EndpointCache } from "@aws-sdk/endpoint-cache";

import { resolveEndpointDiscoveryConfig } from "./resolveEndpointDiscoveryConfig";

jest.mock("@aws-sdk/endpoint-cache");

describe(resolveEndpointDiscoveryConfig.name, () => {
  const endpointDiscoveryCommandCtor = jest.fn();
  const mockInput = {
    isCustomEndpoint: false,
    credentials: jest.fn(),
    endpointDiscoveryEnabledProvider: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("assigns endpointDiscoveryCommandCtor in resolvedConfig", () => {
    const resolvedConfig = resolveEndpointDiscoveryConfig(mockInput, { endpointDiscoveryCommandCtor });
    expect(resolvedConfig.endpointDiscoveryCommandCtor).toStrictEqual(endpointDiscoveryCommandCtor);
  });

  describe("endpointCache", () => {
    it("creates cache of size endpointCacheSize if passed", () => {
      const endpointCacheSize = 100;
      resolveEndpointDiscoveryConfig(
        {
          ...mockInput,
          endpointCacheSize,
        },
        { endpointDiscoveryCommandCtor }
      );
      expect(EndpointCache).toBeCalledWith(endpointCacheSize);
    });

    it("creates cache of size 1000 if endpointCacheSize not passed", () => {
      resolveEndpointDiscoveryConfig(mockInput, { endpointDiscoveryCommandCtor });
      expect(EndpointCache).toBeCalledWith(1000);
    });
  });

  describe("endpointDiscoveryEnabled", () => {
    it.each<boolean>([false, true])(`sets to value passed in the config: %s`, (endpointDiscoveryEnabled) => {
      const resolvedConfig = resolveEndpointDiscoveryConfig(
        {
          ...mockInput,
          endpointDiscoveryEnabled,
        },
        { endpointDiscoveryCommandCtor }
      );
      expect(resolvedConfig.endpointDiscoveryEnabled()).resolves.toBe(endpointDiscoveryEnabled);
      expect(mockInput.endpointDiscoveryEnabledProvider).not.toHaveBeenCalled();
      expect(resolvedConfig.isClientEndpointDiscoveryEnabled).toStrictEqual(true);
    });

    it(`sets to endpointDiscoveryEnabledProvider if value is not passed`, () => {
      const resolvedConfig = resolveEndpointDiscoveryConfig(mockInput, { endpointDiscoveryCommandCtor });
      expect(resolvedConfig.endpointDiscoveryEnabled).toBe(mockInput.endpointDiscoveryEnabledProvider);
      expect(resolvedConfig.isClientEndpointDiscoveryEnabled).toStrictEqual(false);
    });
  });
});
