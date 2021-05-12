import { EndpointCache } from "@aws-sdk/endpoint-cache";

import { resolveEndpointDiscoveryConfig } from "./resolveEndpointDiscoveryConfig";

jest.mock("@aws-sdk/endpoint-cache");

describe(resolveEndpointDiscoveryConfig.name, () => {
  const isCustomEndpoint = false;
  const credentials = jest.fn();
  const endpointDiscoveryEnabledProvider = jest.fn().mockResolvedValue(undefined);

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("endpointCache", () => {
    it("creates cache of size endpointCacheSize if passed", () => {
      const endpointCacheSize = 100;
      resolveEndpointDiscoveryConfig({
        isCustomEndpoint,
        credentials,
        endpointCacheSize,
        endpointDiscoveryEnabledProvider,
      });
      expect(EndpointCache).toBeCalledWith(endpointCacheSize);
    });

    it("creates cache of size 1000 if endpointCacheSize not passed", () => {
      resolveEndpointDiscoveryConfig({
        isCustomEndpoint,
        credentials,
        endpointDiscoveryEnabledProvider,
      });
      expect(EndpointCache).toBeCalledWith(1000);
    });
  });

  describe("endpointDiscoveryEnabled", () => {
    it.each<boolean>([false, true])(`sets to value passed in the config: %s`, (endpointDiscoveryEnabled) => {
      const resolvedConfig = resolveEndpointDiscoveryConfig({
        isCustomEndpoint,
        credentials,
        endpointDiscoveryEnabled,
        endpointDiscoveryEnabledProvider,
      });
      expect(resolvedConfig.endpointDiscoveryEnabled()).resolves.toBe(endpointDiscoveryEnabled);
      expect(endpointDiscoveryEnabledProvider).not.toHaveBeenCalled();
      expect(resolvedConfig.isClientEndpointDiscoveryEnabled).toStrictEqual(true);
    });

    it(`sets to endpointDiscoveryEnabledProvider if value is not passed`, () => {
      const resolvedConfig = resolveEndpointDiscoveryConfig({
        isCustomEndpoint,
        credentials,
        endpointDiscoveryEnabledProvider,
      });
      expect(resolvedConfig.endpointDiscoveryEnabled).toBe(endpointDiscoveryEnabledProvider);
      expect(resolvedConfig.isClientEndpointDiscoveryEnabled).toStrictEqual(false);
    });
  });
});
