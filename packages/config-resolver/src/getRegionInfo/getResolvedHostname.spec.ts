import { getResolvedHostname, RegionHash } from "./getResolvedHostname";
import { getResolvedPartition, PartitionHash } from "./getResolvedPartition";

jest.mock("./getResolvedPartition");

describe(getResolvedHostname.name, () => {
  const mockRegion = "mockRegion";
  const mockPartition = "mockPartition";
  const mockHostname = "{region}.mockHostname.com";

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns hostname if available in regionHash", () => {
    const mockRegionHash: RegionHash = {
      [mockRegion]: {
        hostname: mockHostname,
      },
    };
    const mockPartitionHash: PartitionHash = {};
    expect(getResolvedHostname(mockRegion, { regionHash: mockRegionHash, partitionHash: mockPartitionHash })).toBe(
      mockHostname
    );
    expect(getResolvedPartition).not.toHaveBeenCalled();
  });

  describe("when hostname is not available in regionHash", () => {
    const mockRegionHash: RegionHash = {};

    beforeEach(() => {
      (getResolvedPartition as jest.Mock).mockReturnValue(mockPartition);
    });

    it("returns hostname if available in partitionHash", () => {
      const mockPartitionHash: PartitionHash = {
        [mockPartition]: {
          regions: [mockRegion, `${mockRegion}2`, `${mockRegion}3`],
          hostname: mockHostname,
        },
      };
      expect(getResolvedHostname(mockRegion, { regionHash: mockRegionHash, partitionHash: mockPartitionHash })).toBe(
        mockHostname.replace("{region}", mockRegion)
      );
      expect(getResolvedPartition).toHaveBeenCalledTimes(1);
      expect(getResolvedPartition).toHaveBeenCalledWith(mockRegion, { partitionHash: mockPartitionHash });
    });

    it("throws if partitionHash is empty", () => {
      const mockPartitionHash: PartitionHash = {};
      expect(() =>
        getResolvedHostname(mockRegion, { regionHash: mockRegionHash, partitionHash: mockPartitionHash })
      ).toThrow();
    });
  });
});
