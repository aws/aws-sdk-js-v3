import { MetadataService } from "./MetadataService";
import { fromInstanceMetadata } from "@aws-sdk/credential-providers";

describe("MetadataService E2E Tests", () => {
  let metadataService;
  const provider = fromInstanceMetadata({ timeout: 1000, maxRetries: 0 });
  let metadataServiceAvailable;

  beforeAll(async () => {
    try {
      await provider();
      metadataServiceAvailable = true;
    } catch (err) {
      metadataServiceAvailable = false;
    }
    console.log("Metadata Service availability: ", metadataServiceAvailable);
    metadataService = new MetadataService({});
    console.log("IMDS Endpoint: ", metadataService.endpoint);
  });

  it("should fetch metadata token successfully", async () => {
    // This test will only pass if run on an EC2 instance or an environment with access to the EC2 Metadata Service
    if (!metadataServiceAvailable) {
      return;
    }
    const token = await metadataService.fetchMetadataToken();
    expect(token).toBeDefined();
    expect(typeof token).toBe("string");
    expect(token.length).toBeGreaterThan(0);
  });

  it("should fetch instance ID successfully", async () => {
    if (!metadataServiceAvailable) {
      return;
    }
    const metadata = await metadataService.request("/latest/meta-data/", {}, false);
    expect(metadata).toBeDefined();
    expect(typeof metadata).toBe("string");
    expect(metadata.length).toBeGreaterThan(0);
    const lines = metadata.split("\n").map((line) => line.trim());
    expect(lines.length).toBeGreaterThan(5);
    expect(lines).toContain("instance-id");
    expect(lines).toContain("services/");
  });

  it("should fetch instance ID successfully with token", async () => {
    if (!metadataServiceAvailable) {
      return;
    }
    const metadata = await metadataService.request("/latest/meta-data/", {}, true);
    expect(metadata).toBeDefined();
    expect(typeof metadata).toBe("string");
    const lines = metadata.split("\n").map((line) => line.trim());
    expect(lines.length).toBeGreaterThan(5);
    expect(lines).toContain("instance-id");
    expect(lines).toContain("services/");
  });
});
