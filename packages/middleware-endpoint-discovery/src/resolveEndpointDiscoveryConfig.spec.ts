import { EndpointCache } from "@aws-sdk/endpoint-cache";
import { afterEach, describe, expect, test as it, vi } from "vitest";

import { resolveEndpointDiscoveryConfig } from "./resolveEndpointDiscoveryConfig";

vi.mock("@aws-sdk/endpoint-cache");

describe(resolveEndpointDiscoveryConfig.name, () => {
  const endpointDiscoveryCommandCtor = vi.fn();
  const mockInput = () => ({
    isCustomEndpoint: false,
    credentials: vi.fn(),
    endpointDiscoveryEnabledProvider: vi.fn(),
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("maintains object custody", () => {
    const input = {
      credentials: vi.fn(),
      endpointDiscoveryEnabledProvider: async () => false,
    };
    expect(resolveEndpointDiscoveryConfig(input, { endpointDiscoveryCommandCtor })).toBe(input);
  });

  it("assigns endpointDiscoveryCommandCtor in resolvedConfig", () => {
    const resolvedConfig = resolveEndpointDiscoveryConfig(mockInput(), { endpointDiscoveryCommandCtor });
    expect(resolvedConfig.endpointDiscoveryCommandCtor).toStrictEqual(endpointDiscoveryCommandCtor);
  });

  describe("endpointCache", () => {
    it("creates cache of size endpointCacheSize if passed", () => {
      const endpointCacheSize = 100;
      resolveEndpointDiscoveryConfig(
        {
          ...mockInput(),
          endpointCacheSize,
        },
        { endpointDiscoveryCommandCtor }
      );
      expect(EndpointCache).toBeCalledWith(endpointCacheSize);
    });

    it("creates cache of size 1000 if endpointCacheSize not passed", () => {
      resolveEndpointDiscoveryConfig(mockInput(), { endpointDiscoveryCommandCtor });
      expect(EndpointCache).toBeCalledWith(1000);
    });
  });

  describe("endpointDiscoveryEnabled", () => {
    it.each<boolean>([false, true])(`sets to value passed in the config: %s`, async (endpointDiscoveryEnabled) => {
      const input = mockInput();
      const resolvedConfig = resolveEndpointDiscoveryConfig(
        {
          ...input,
          endpointDiscoveryEnabled,
        },
        { endpointDiscoveryCommandCtor }
      );
      await expect(resolvedConfig.endpointDiscoveryEnabled()).resolves.toBe(endpointDiscoveryEnabled);
      expect(input.endpointDiscoveryEnabledProvider).not.toHaveBeenCalled();
      expect(resolvedConfig.isClientEndpointDiscoveryEnabled).toStrictEqual(true);
    });

    it(`sets to endpointDiscoveryEnabledProvider if value is not passed`, () => {
      const input = mockInput();
      const resolvedConfig = resolveEndpointDiscoveryConfig(input, { endpointDiscoveryCommandCtor });
      expect(resolvedConfig.endpointDiscoveryEnabled).toBe(input.endpointDiscoveryEnabledProvider);
      expect(resolvedConfig.isClientEndpointDiscoveryEnabled).toStrictEqual(false);
    });
  });
});
