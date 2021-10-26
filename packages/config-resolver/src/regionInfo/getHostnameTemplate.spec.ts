import { getHostnameTemplate } from "./getHostnameTemplate";
import { getResolvedPartition, PartitionHash } from "./getResolvedPartition";

jest.mock("./getResolvedPartition");

const AWS_TEMPLATE = "{signingService}.{region}.amazonaws.com";

describe(getHostnameTemplate.name, () => {
  const mockRegion = "mockRegion";
  const mockPartition = "mockPartition";
  const mockRegionRegex = "mockRegionRegex";
  const mockHostname = "{region}.mockHostname.com";
  const mockSigningService = "mockSigningService";

  beforeEach(() => {
    (getResolvedPartition as jest.Mock).mockReturnValue(mockPartition);
  });

  afterEach(() => {
    expect(getResolvedPartition).toHaveBeenCalledTimes(1);
    jest.clearAllMocks();
  });

  it("returns hostname template if present in partitionHash", () => {
    const mockPartitionHash: PartitionHash = {
      [mockPartition]: {
        regions: [mockRegion, `${mockRegion}2`, `${mockRegion}3`],
        regionRegex: mockRegionRegex,
        hostname: mockHostname,
      },
    };

    expect(
      getHostnameTemplate(mockRegion, { signingService: mockSigningService, partitionHash: mockPartitionHash })
    ).toEqual(mockHostname);
    expect(getResolvedPartition).toHaveBeenCalledWith(mockRegion, { partitionHash: mockPartitionHash });
  });

  it("returns default hostname template if not present in partitionHash", () => {
    const mockPartitionHash: PartitionHash = {};

    expect(
      getHostnameTemplate(mockRegion, { signingService: mockSigningService, partitionHash: mockPartitionHash })
    ).toEqual(AWS_TEMPLATE.replace("{signingService}", mockSigningService));
    expect(getResolvedPartition).toHaveBeenCalledWith(mockRegion, { partitionHash: mockPartitionHash });
  });
});
