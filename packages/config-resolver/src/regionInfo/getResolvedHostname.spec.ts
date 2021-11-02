import { getResolvedHostname } from "./getResolvedHostname";

describe(getResolvedHostname.name, () => {
  const mockRegion = "mockRegion";
  const mockHostname = "{region}.mockHostname.com";

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns hostname if available in regionHostname", () => {
    expect(
      getResolvedHostname(mockRegion, {
        regionHostname: mockHostname,
      })
    ).toBe(mockHostname);
  });

  it("returns hostname from partitionHostname when not available in partitionHostname", () => {
    expect(
      getResolvedHostname(mockRegion, {
        partitionHostname: mockHostname,
      })
    ).toBe(mockHostname.replace("{region}", mockRegion));
  });

  it("returns undefined not available in either regionHostname or partitionHostname", () => {
    expect(getResolvedHostname(mockRegion, {})).toBeUndefined();
  });
});
