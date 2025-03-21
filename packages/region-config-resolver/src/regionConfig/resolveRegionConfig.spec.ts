import { Provider } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { getRealRegion } from "./getRealRegion";
import { isFipsRegion } from "./isFipsRegion";
import { resolveRegionConfig } from "./resolveRegionConfig";

vi.mock("./getRealRegion");
vi.mock("./isFipsRegion");

describe("RegionConfig", () => {
  const mockRegion = "mockRegion";
  const mockRealRegion = "mockRealRegion";
  const mockUseFipsEndpoint = () => Promise.resolve(false);

  beforeEach(() => {
    vi.mocked(getRealRegion).mockReturnValue(mockRealRegion);
    vi.mocked(isFipsRegion).mockReturnValue(false);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("maintains object custody", () => {
    const input = {
      region: "mockRegion",
    };
    expect(resolveRegionConfig(input)).toBe(input);
  });

  describe("region", () => {
    it("return normalized value with real region if passed as a string", async () => {
      const resolvedRegionConfig = resolveRegionConfig({ region: mockRegion, useFipsEndpoint: mockUseFipsEndpoint });
      const resolvedRegion = await resolvedRegionConfig.region();
      expect(resolvedRegion).toBe(mockRealRegion);
      expect(getRealRegion).toHaveBeenCalledTimes(1);
      expect(getRealRegion).toHaveBeenCalledWith(mockRegion);
    });

    it("return provider with real region if passed as a Provider", async () => {
      const resolvedRegionConfig = resolveRegionConfig({
        region: () => Promise.resolve(mockRegion),
        useFipsEndpoint: mockUseFipsEndpoint,
      });
      const resolvedRegion = await resolvedRegionConfig.region();
      expect(resolvedRegion).toBe(mockRealRegion);
      expect(getRealRegion).toHaveBeenCalledTimes(1);
      expect(getRealRegion).toHaveBeenCalledWith(mockRegion);
    });

    it("throw if region is not supplied", () => {
      expect(() => resolveRegionConfig({ useFipsEndpoint: mockUseFipsEndpoint })).toThrow();
    });
  });

  describe("useFipsEndpoint", () => {
    let mockRegionProvider: string | Provider<string>;
    let mockUseFipsEndpoint: boolean | Provider<boolean>;

    beforeEach(() => {
      mockRegionProvider = vi.fn().mockResolvedValueOnce(Promise.resolve(mockRegion));
      mockUseFipsEndpoint = vi.fn().mockResolvedValueOnce(Promise.resolve(false));
    });

    afterEach(() => {
      expect(isFipsRegion).toHaveBeenCalledTimes(1);
      expect(isFipsRegion).toHaveBeenCalledWith(mockRegion);
      expect(mockRegionProvider).toHaveBeenCalledTimes(1);
    });

    it("can be undefined", async () => {
      const resolvedRegionConfig = resolveRegionConfig({
        region: mockRegionProvider,
      });

      expect(await resolvedRegionConfig.useFipsEndpoint()).toBe(false);
    });

    it("returns Provider which returns true for FIPS endpoints", async () => {
      vi.mocked(isFipsRegion).mockReturnValue(true);
      const resolvedRegionConfig = resolveRegionConfig({
        region: mockRegionProvider,
        useFipsEndpoint: mockUseFipsEndpoint,
      });

      const useFipsEndpoint = await resolvedRegionConfig.useFipsEndpoint();
      expect(useFipsEndpoint).toStrictEqual(true);
      expect(mockUseFipsEndpoint).not.toHaveBeenCalled();
    });

    it("returns passed Provider if endpoint is not FIPS", async () => {
      const resolvedRegionConfig = resolveRegionConfig({
        region: mockRegionProvider,
        useFipsEndpoint: mockUseFipsEndpoint,
      });

      const useFipsEndpoint = await resolvedRegionConfig.useFipsEndpoint();
      expect(useFipsEndpoint).toStrictEqual(false);
      expect(mockUseFipsEndpoint).toHaveBeenCalledTimes(1);
    });
  });
});
