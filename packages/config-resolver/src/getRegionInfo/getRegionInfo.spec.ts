import { getRegionInfo } from "./getRegionInfo";
import { getResolvedHostname, RegionHash } from "./getResolvedHostname";
import { getResolvedPartition, PartitionHash } from "./getResolvedPartition";

jest.mock("./getResolvedHostname");
jest.mock("./getResolvedPartition");

describe(getRegionInfo.name, () => {
  const mockPartition = "mockPartition";
  const mockSigningService = "mockSigningService";

  const mockRegion = "mockRegion";
  const mockHostname = "{region}.mockHostname.com";
  const mockEndpointRegion = "mockEndpointRegion";
  const mockEndpointHostname = "{region}.mockEndpointHostname.com";

  enum RegionCase {
    REGION = "Region",
    ENDPOINT = "Endpoint",
    REGION_AND_ENDPOINT = "Region and Endpoint",
  }

  const getMockRegionHash = (regionCase: RegionCase): RegionHash => ({
    ...((regionCase === RegionCase.REGION || regionCase === RegionCase.REGION_AND_ENDPOINT) && {
      [mockRegion]: {
        hostname: mockHostname,
      },
    }),
    ...((regionCase === RegionCase.ENDPOINT || regionCase === RegionCase.REGION_AND_ENDPOINT) && {
      [mockEndpointRegion]: {
        hostname: mockEndpointHostname,
      },
    }),
  });

  const getMockPartitionHash = (regionCase: RegionCase): PartitionHash => ({
    [mockPartition]: {
      regions: [mockRegion, `${mockRegion}2`, `${mockRegion}3`],
      ...((regionCase === RegionCase.REGION || regionCase === RegionCase.REGION_AND_ENDPOINT) && {
        hostname: mockHostname,
      }),
      ...((regionCase === RegionCase.ENDPOINT || regionCase === RegionCase.REGION_AND_ENDPOINT) && {
        endpoint: mockEndpointRegion,
      }),
    },
  });

  const getMockResolvedRegion = (regionCase: RegionCase): string =>
    regionCase === RegionCase.REGION ? mockRegion : mockEndpointRegion;

  const getMockResolvedPartitionOptions = (partitionHash) => ({ partitionHash });

  const getMockResolvedHostnameOptions = (regionHash, getResolvedPartitionOptions) => ({
    ...getResolvedPartitionOptions,
    signingService: mockSigningService,
    regionHash,
  });

  beforeEach(() => {
    (getResolvedHostname as jest.Mock).mockReturnValue(mockHostname);
    (getResolvedPartition as jest.Mock).mockReturnValue(mockPartition);
  });

  afterEach(() => {
    expect(getResolvedHostname).toHaveBeenCalledTimes(1);
    expect(getResolvedPartition).toHaveBeenCalledTimes(1);
    jest.clearAllMocks();
  });

  describe("returns data based on options passed", () => {
    it.each(Object.values(RegionCase))("%s", (regionCase) => {
      const mockRegionHash = getMockRegionHash(regionCase);
      const mockPartitionHash = getMockPartitionHash(regionCase);

      const mockGetResolvedPartitionOptions = getMockResolvedPartitionOptions(mockPartitionHash);
      const mockGetResolvedHostnameOptions = getMockResolvedHostnameOptions(
        mockRegionHash,
        mockGetResolvedPartitionOptions
      );

      expect(getRegionInfo(mockRegion, mockGetResolvedHostnameOptions)).toEqual({
        signingService: mockSigningService,
        hostname: mockHostname,
        partition: mockPartition,
      });

      expect(getResolvedHostname).toHaveBeenCalledWith(
        getMockResolvedRegion(regionCase),
        mockGetResolvedHostnameOptions
      );
      expect(getResolvedPartition).toHaveBeenCalledWith(mockRegion, mockGetResolvedPartitionOptions);
    });
  });

  describe("returns signingRegion if present in regionHash", () => {
    const getMockRegionHashWithSigningRegion = (
      regionCase: RegionCase,
      mockRegionHash: RegionHash,
      mockSigningRegion: string
    ): RegionHash => ({
      ...mockRegionHash,
      ...((regionCase === RegionCase.REGION || regionCase === RegionCase.REGION_AND_ENDPOINT) && {
        [mockRegion]: {
          ...mockRegionHash[mockRegion],
          signingRegion: mockSigningRegion,
        },
      }),
      ...((regionCase === RegionCase.ENDPOINT || regionCase === RegionCase.REGION_AND_ENDPOINT) && {
        [mockEndpointRegion]: {
          ...mockRegionHash[mockEndpointRegion],
          signingRegion: mockSigningRegion,
        },
      }),
    });

    it.each(Object.values(RegionCase))("%s", (regionCase) => {
      const mockSigningRegion = "mockSigningRegion";
      const mockRegionHash = getMockRegionHash(regionCase);
      const mockPartitionHash = getMockPartitionHash(regionCase);

      const mockGetResolvedPartitionOptions = getMockResolvedPartitionOptions(mockPartitionHash);
      const mockGetResolvedHostnameOptions = getMockResolvedHostnameOptions(
        mockRegionHash,
        mockGetResolvedPartitionOptions
      );

      const mockRegionHashWithSigningRegion = getMockRegionHashWithSigningRegion(
        regionCase,
        mockRegionHash,
        mockSigningRegion
      );

      expect(
        getRegionInfo(mockRegion, { ...mockGetResolvedHostnameOptions, regionHash: mockRegionHashWithSigningRegion })
      ).toEqual({
        signingService: mockSigningService,
        hostname: mockHostname,
        partition: mockPartition,
        signingRegion: mockSigningRegion,
      });

      expect(getResolvedHostname).toHaveBeenCalledWith(getMockResolvedRegion(regionCase), {
        ...mockGetResolvedHostnameOptions,
        regionHash: mockRegionHashWithSigningRegion,
      });
      expect(getResolvedPartition).toHaveBeenCalledWith(mockRegion, mockGetResolvedPartitionOptions);
    });
  });

  describe("returns signingService if present in regionHash", () => {
    const getMockRegionHashWithSigningService = (
      regionCase: RegionCase,
      mockRegionHash: RegionHash,
      mockSigningService: string
    ): RegionHash => ({
      ...mockRegionHash,
      ...((regionCase === RegionCase.REGION || regionCase === RegionCase.REGION_AND_ENDPOINT) && {
        [mockRegion]: {
          ...mockRegionHash[mockRegion],
          signingService: mockSigningService,
        },
      }),
      ...((regionCase === RegionCase.ENDPOINT || regionCase === RegionCase.REGION_AND_ENDPOINT) && {
        [mockEndpointRegion]: {
          ...mockRegionHash[mockEndpointRegion],
          signingService: mockSigningService,
        },
      }),
    });

    it.each(Object.values(RegionCase))("%s", (regionCase) => {
      const mockSigningServiceInRegionHash = "mockSigningServiceInRegionHash";
      const mockRegionHash = getMockRegionHash(regionCase);
      const mockPartitionHash = getMockPartitionHash(regionCase);

      const mockGetResolvedPartitionOptions = getMockResolvedPartitionOptions(mockPartitionHash);
      const mockGetResolvedHostnameOptions = getMockResolvedHostnameOptions(
        mockRegionHash,
        mockGetResolvedPartitionOptions
      );

      const mockRegionHashWithSigningRegion = getMockRegionHashWithSigningService(
        regionCase,
        mockRegionHash,
        mockSigningServiceInRegionHash
      );

      expect(
        getRegionInfo(mockRegion, { ...mockGetResolvedHostnameOptions, regionHash: mockRegionHashWithSigningRegion })
      ).toEqual({
        signingService: mockSigningServiceInRegionHash,
        hostname: mockHostname,
        partition: mockPartition,
      });

      expect(getResolvedHostname).toHaveBeenCalledWith(getMockResolvedRegion(regionCase), {
        ...mockGetResolvedHostnameOptions,
        regionHash: mockRegionHashWithSigningRegion,
      });
      expect(getResolvedPartition).toHaveBeenCalledWith(mockRegion, mockGetResolvedPartitionOptions);
    });
  });
});
