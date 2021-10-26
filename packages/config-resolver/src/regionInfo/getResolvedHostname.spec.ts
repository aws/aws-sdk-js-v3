import { getHostnameTemplate } from "./getHostnameTemplate";
import { getResolvedHostname } from "./getResolvedHostname";

jest.mock("./getHostnameTemplate");

describe(getResolvedHostname.name, () => {
  const mockSigningService = "mockSigningService";
  const mockRegion = "mockRegion";
  const mockHostname = "{region}.mockHostname.com";

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns hostname if available in regionHash", () => {
    expect(
      getResolvedHostname(mockRegion, {
        signingService: mockSigningService,
        regionHostname: mockHostname,
      })
    ).toBe(mockHostname);
    expect(getHostnameTemplate).not.toHaveBeenCalled();
  });

  it("returns hostname from hostname template when not available in regionHash", () => {
    (getHostnameTemplate as jest.Mock).mockReturnValue(mockHostname);

    expect(
      getResolvedHostname(mockRegion, {
        signingService: mockSigningService,
        partitionHostname: mockHostname,
      })
    ).toBe(mockHostname.replace("{region}", mockRegion));

    expect(getHostnameTemplate).toHaveBeenCalledTimes(1);
    expect(getHostnameTemplate).toHaveBeenCalledWith(mockSigningService, {
      partitionHostname: mockHostname,
    });
  });
});
