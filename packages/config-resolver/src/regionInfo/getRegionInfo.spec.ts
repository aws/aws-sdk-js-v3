import { getRegionInfo } from "./getRegionInfo";
import { getResolvedHostname } from "./getResolvedHostname";
import { getResolvedPartition } from "./getResolvedPartition";
import { getResolvedSigningRegion } from "./getResolvedSigningRegion";
import { PartitionHash } from "./PartitionHash";
import { RegionHash } from "./RegionHash";

jest.mock("./getResolvedHostname");
jest.mock("./getResolvedPartition");
jest.mock("./getResolvedSigningRegion");

describe(getRegionInfo.name, () => {
  const mockPartition = "mockPartition";
  const mockSigningService = "mockSigningService";

  const mockRegion = "mockRegion";
  const mockRegionRegex = "mockRegionRegex";
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
        variants: [{ hostname: mockHostname, tags: [] }],
      },
    }),
    ...((regionCase === RegionCase.ENDPOINT || regionCase === RegionCase.REGION_AND_ENDPOINT) && {
      [mockEndpointRegion]: {
        hostname: mockEndpointHostname,
        variants: [{ hostname: mockEndpointHostname, tags: [] }],
      },
    }),
  });

  const getMockPartitionHash = (regionCase: RegionCase): PartitionHash => ({
    [mockPartition]: {
      regions: [mockRegion, `${mockRegion}2`, `${mockRegion}3`],
      regionRegex: mockRegionRegex,
      hostname: mockHostname,
      variants: [{ hostname: mockHostname, tags: [] }],
      ...((regionCase === RegionCase.ENDPOINT || regionCase === RegionCase.REGION_AND_ENDPOINT) && {
        endpoint: mockEndpointRegion,
      }),
    },
  });

  const getMockResolvedRegion = (regionCase: RegionCase): string =>
    regionCase !== RegionCase.ENDPOINT ? mockRegion : mockEndpointRegion;

  const getMockResolvedPartitionOptions = (partitionHash) => ({ partitionHash });

  const getMockRegionInfoOptions = (regionHash, getResolvedPartitionOptions) => ({
    ...getResolvedPartitionOptions,
    signingService: mockSigningService,
    regionHash,
  });

  beforeEach(() => {
    (getResolvedHostname as jest.Mock).mockReturnValue(mockHostname);
    (getResolvedPartition as jest.Mock).mockReturnValue(mockPartition);
    (getResolvedSigningRegion as jest.Mock).mockReturnValue(undefined);
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
      const mockGetRegionInfoOptions = getMockRegionInfoOptions(mockRegionHash, mockGetResolvedPartitionOptions);

      expect(getRegionInfo(mockRegion, mockGetRegionInfoOptions)).toEqual({
        signingService: mockSigningService,
        hostname: mockHostname,
        partition: mockPartition,
      });

      const mockResolvedRegion = getMockResolvedRegion(regionCase);
      expect(getResolvedHostname).toHaveBeenCalledWith(mockResolvedRegion, {
        signingService: mockSigningService,
        regionHostname: mockGetRegionInfoOptions.regionHash[mockResolvedRegion]?.hostname,
        partitionHostname: mockGetRegionInfoOptions.partitionHash[mockPartition]?.hostname,
      });
      expect(getResolvedPartition).toHaveBeenCalledWith(mockRegion, mockGetResolvedPartitionOptions);
      expect(getResolvedSigningRegion).toHaveBeenCalledWith(mockRegion, {
        hostname: mockHostname,
        regionRegex: mockRegionRegex,
      });
    });
  });

  describe("returns signingRegion if resolved by getResolvedSigningRegion", () => {
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
      (getResolvedSigningRegion as jest.Mock).mockReturnValueOnce(mockSigningRegion);
      const mockRegionHash = getMockRegionHash(regionCase);
      const mockPartitionHash = getMockPartitionHash(regionCase);

      const mockGetResolvedPartitionOptions = getMockResolvedPartitionOptions(mockPartitionHash);
      const mockGetRegionInfoOptions = getMockRegionInfoOptions(mockRegionHash, mockGetResolvedPartitionOptions);

      const mockRegionHashWithSigningRegion = getMockRegionHashWithSigningRegion(
        regionCase,
        mockRegionHash,
        mockSigningRegion
      );

      expect(
        getRegionInfo(mockRegion, { ...mockGetRegionInfoOptions, regionHash: mockRegionHashWithSigningRegion })
      ).toEqual({
        signingService: mockSigningService,
        hostname: mockHostname,
        partition: mockPartition,
        signingRegion: mockSigningRegion,
      });

      const mockResolvedRegion = getMockResolvedRegion(regionCase);
      expect(getResolvedHostname).toHaveBeenCalledWith(mockResolvedRegion, {
        signingService: mockSigningService,
        regionHostname: mockGetRegionInfoOptions.regionHash[mockResolvedRegion]?.hostname,
        partitionHostname: mockGetRegionInfoOptions.partitionHash[mockPartition]?.hostname,
      });
      expect(getResolvedPartition).toHaveBeenCalledWith(mockRegion, mockGetResolvedPartitionOptions);
      expect(getResolvedSigningRegion).toHaveBeenCalledWith(mockRegion, {
        hostname: mockHostname,
        signingRegion: mockSigningRegion,
        regionRegex: mockRegionRegex,
      });
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
      const mockGetRegionInfoOptions = getMockRegionInfoOptions(mockRegionHash, mockGetResolvedPartitionOptions);

      const mockRegionHashWithSigningRegion = getMockRegionHashWithSigningService(
        regionCase,
        mockRegionHash,
        mockSigningServiceInRegionHash
      );

      expect(
        getRegionInfo(mockRegion, { ...mockGetRegionInfoOptions, regionHash: mockRegionHashWithSigningRegion })
      ).toEqual({
        signingService: mockSigningServiceInRegionHash,
        hostname: mockHostname,
        partition: mockPartition,
      });

      const mockResolvedRegion = getMockResolvedRegion(regionCase);
      expect(getResolvedHostname).toHaveBeenCalledWith(mockResolvedRegion, {
        signingService: mockSigningService,
        regionHostname: mockGetRegionInfoOptions.regionHash[mockResolvedRegion]?.hostname,
        partitionHostname: mockGetRegionInfoOptions.partitionHash[mockPartition]?.hostname,
      });
      expect(getResolvedPartition).toHaveBeenCalledWith(mockRegion, mockGetResolvedPartitionOptions);
      expect(getResolvedSigningRegion).toHaveBeenCalledWith(mockRegion, {
        hostname: mockHostname,
        regionRegex: mockRegionRegex,
      });
    });
  });
});
