import { getHostnameTemplate } from "./getHostnameTemplate";

const AWS_TEMPLATE = "{signingService}.{region}.amazonaws.com";

describe(getHostnameTemplate.name, () => {
  const mockHostname = "{region}.mockHostname.com";
  const mockSigningService = "mockSigningService";

  it("returns partitionHostname if present", () => {
    expect(getHostnameTemplate(mockSigningService, { partitionHostname: mockHostname })).toEqual(mockHostname);
  });

  it("returns default hostname template if partitionHostname is not present", () => {
    expect(getHostnameTemplate(mockSigningService, {})).toEqual(
      AWS_TEMPLATE.replace("{signingService}", mockSigningService)
    );
  });
});
