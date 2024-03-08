import { MetadataService } from "./MetadataService";

describe("MetadataService E2E Tests", () => {
  let metadataService;

  beforeAll(() => {
    metadataService = new MetadataService({});
    console.log("IMDS Endpoint: ", metadataService.endpoint);
  });

  it("should fetch metadata token successfully", async () => {
    // This test will only pass if run on an EC2 instance or an environment with access to the EC2 Metadata Service
    const token = await metadataService.fetchMetadataToken();
    expect(token).toBeDefined();
    expect(typeof token).toBe("string");
    expect(token.length).toBeGreaterThan(0);
    console.log(token);
  });

  it("should fetch instance ID successfully", async () => {
    const instanceId = await metadataService.request("/latest/meta-data/instance-id", {}, false);
    expect(instanceId).toBeDefined();
    expect(typeof instanceId).toBe("string");
    expect(instanceId.length).toBeGreaterThan(0);
    console.log(instanceId);
  });

  it("should fetch instance ID successfully with token", async () => {
    const instanceId = await metadataService.request("/latest/meta-data/instance-id", {}, true);
    expect(instanceId).toBeDefined();
    expect(typeof instanceId).toBe("string");
    expect(instanceId.length).toBeGreaterThan(0);
    console.log(instanceId);
  });
});
