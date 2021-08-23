import { getRegionInfo } from "./getRegionInfo";
import { getResolvedHostname, RegionHash } from "./getResolvedHostname";
import { getResolvedPartition, PartitionHash } from "./getResolvedPartition";

jest.mock("./getResolvedHostname");
jest.mock("./getResolvedPartition");

describe(getRegionInfo.name, () => {
  const mockSigningService = "mockSigningService";
  const mockRegion = "mockRegion";
  const mockPartition = "mockPartition";
  const mockHostname = "{region}.mockHostname.com";

  const mockRegionHash: RegionHash = {
    [mockRegion]: {
      hostname: mockHostname,
    },
  };
  const mockPartitionHash: PartitionHash = {
    [mockPartition]: {
      regions: [mockRegion, `${mockRegion}2`, `${mockRegion}3`],
      hostname: mockHostname,
    },
  };

  const mockGetResolvedPartitionOptions = {
    partitionHash: mockPartitionHash,
  };

  const mockGetResolvedHostnameOptions = {
    ...mockGetResolvedPartitionOptions,
    regionHash: mockRegionHash,
  };

  const mockGetRegionInfoOptions = {
    ...mockGetResolvedHostnameOptions,
    signingService: mockSigningService,
  };

  beforeEach(() => {
    (getResolvedHostname as jest.Mock).mockReturnValue(mockHostname);
    (getResolvedPartition as jest.Mock).mockReturnValue(mockPartition);
  });

  afterEach(() => {
    expect(getResolvedHostname).toHaveBeenCalledTimes(1);
    expect(getResolvedPartition).toHaveBeenCalledTimes(1);
    jest.clearAllMocks();
  });

  it("returns data based on options passed", () => {
    expect(getRegionInfo(mockRegion, mockGetRegionInfoOptions)).toEqual({
      signingService: mockSigningService,
      hostname: mockHostname,
      partition: mockPartition,
    });

    expect(getResolvedHostname).toHaveBeenCalledWith(mockRegion, mockGetResolvedHostnameOptions);
    expect(getResolvedPartition).toHaveBeenCalledWith(mockRegion, mockGetResolvedPartitionOptions);
  });

  it("returns signingRegion if present in regionHash", () => {
    const mockSigningRegion = "mockSigningRegion";
    const mockRegionHashWithSigningRegion = {
      ...mockRegionHash,
      [mockRegion]: {
        ...mockRegionHash[mockRegion],
        signingRegion: mockSigningRegion,
      },
    };

    expect(
      getRegionInfo(mockRegion, { ...mockGetRegionInfoOptions, regionHash: mockRegionHashWithSigningRegion })
    ).toEqual({
      signingService: mockSigningService,
      hostname: mockHostname,
      partition: mockPartition,
      signingRegion: mockSigningRegion,
    });

    expect(getResolvedHostname).toHaveBeenCalledWith(mockRegion, {
      ...mockGetResolvedHostnameOptions,
      regionHash: mockRegionHashWithSigningRegion,
    });
    expect(getResolvedPartition).toHaveBeenCalledWith(mockRegion, mockGetResolvedPartitionOptions);
  });

  it("returns signingService if present in regionHash", () => {
    const mockSigningServiceInRegionHash = "mockSigningServiceInRegionHash";
    const mockRegionHashWithSigningService = {
      ...mockRegionHash,
      [mockRegion]: {
        ...mockRegionHash[mockRegion],
        signingService: mockSigningServiceInRegionHash,
      },
    };

    expect(
      getRegionInfo(mockRegion, { ...mockGetRegionInfoOptions, regionHash: mockRegionHashWithSigningService })
    ).toEqual({
      signingService: mockSigningServiceInRegionHash,
      hostname: mockHostname,
      partition: mockPartition,
    });

    expect(getResolvedHostname).toHaveBeenCalledWith(mockRegion, {
      ...mockGetResolvedHostnameOptions,
      regionHash: mockRegionHashWithSigningService,
    });
    expect(getResolvedPartition).toHaveBeenCalledWith(mockRegion, mockGetResolvedPartitionOptions);
  });
});
