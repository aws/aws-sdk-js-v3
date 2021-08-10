import { getInstanceMetadataHost } from "./getInstanceMetadataHost";

describe(getInstanceMetadataHost.name, () => {
  it("returns 169.254.169.254", () => {
    expect(getInstanceMetadataHost()).toBe("169.254.169.254");
  });
});
