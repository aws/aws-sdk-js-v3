import { getRealRegion } from "./getRealRegion";
import { isFipsRegion } from "./isFipsRegion";
import { resolveRegionConfig } from "./resolveRegionConfig";

jest.mock("./getRealRegion");
jest.mock("./isFipsRegion");

describe("RegionConfig", () => {
  const mockRegion = "mockRegion";
  const mockRealRegion = "mockRealRegion";
  const mockUseFipsEndpoint = () => Promise.resolve(false);

  beforeEach(() => {
    (getRealRegion as jest.Mock).mockReturnValue(mockRealRegion);
    (isFipsRegion as jest.Mock).mockReturnValue(false);
  });

  afterEach(() => {
    jest.clearAllMocks();
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
    let mockRegionProvider;
    let mockUseFipsEndpoint;

    beforeEach(() => {
      mockRegionProvider = jest.fn().mockResolvedValueOnce(Promise.resolve(mockRegion));
      mockUseFipsEndpoint = jest.fn().mockResolvedValueOnce(Promise.resolve(false));
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
      (isFipsRegion as jest.Mock).mockReturnValue(true);
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
