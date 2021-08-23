import { getHostnameTemplate } from "./getHostnameTemplate";
import { getResolvedHostname, RegionHash } from "./getResolvedHostname";
import { PartitionHash } from "./getResolvedPartition";

jest.mock("./getHostnameTemplate");

describe(getResolvedHostname.name, () => {
  const mockSigningService = "mockSigningService";
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

    expect(
      getResolvedHostname(mockRegion, {
        signingService: mockSigningService,
        regionHash: mockRegionHash,
        partitionHash: mockPartitionHash,
      })
    ).toBe(mockHostname);
    expect(getHostnameTemplate).not.toHaveBeenCalled();
  });

  it("returns hostname from hostname template when not available in regionHash", () => {
    const mockRegionHash: RegionHash = {};

    (getHostnameTemplate as jest.Mock).mockReturnValue(mockHostname);

    const mockPartitionHash: PartitionHash = {
      [mockPartition]: {
        regions: [mockRegion, `${mockRegion}2`, `${mockRegion}3`],
        hostname: mockHostname,
      },
    };

    expect(
      getResolvedHostname(mockRegion, {
        signingService: mockSigningService,
        regionHash: mockRegionHash,
        partitionHash: mockPartitionHash,
      })
    ).toBe(mockHostname.replace("{region}", mockRegion));

    expect(getHostnameTemplate).toHaveBeenCalledTimes(1);
    expect(getHostnameTemplate).toHaveBeenCalledWith(mockRegion, {
      signingService: mockSigningService,
      partitionHash: mockPartitionHash,
    });
  });
});
