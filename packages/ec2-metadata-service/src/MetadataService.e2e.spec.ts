import { setTestCredentials } from "@aws-sdk/aws-util-test";
import { fromInstanceMetadata } from "@aws-sdk/credential-providers";
import { beforeAll, describe, expect, test as it, vi } from "vitest";

import { MetadataService } from "./MetadataService";

describe("MetadataService E2E Tests", () => {
  let metadataService: any;
  const provider = fromInstanceMetadata({ timeout: 1000, maxRetries: 0 });
  let metadataServiceAvailable: any;

  beforeAll(async () => {
    await setTestCredentials();
    try {
      await provider();
      metadataServiceAvailable = true;
    } catch (err) {
      metadataServiceAvailable = false;
    }
    console.log("Metadata Service availability: ", metadataServiceAvailable);
    metadataService = new MetadataService({});
    const config = await metadataService.config;
    console.log("IMDS Endpoint: ", config.endpoint);
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

  it("should fetch metadata successfully with token", async () => {
    if (!metadataServiceAvailable) {
      return;
    }
    const metadata = (await metadataService.request("/latest/meta-data/", {})) as string;
    expect(metadata).toBeDefined();
    expect(typeof metadata).toBe("string");
    const lines = metadata.split("\n").map((line) => line.trim());
    expect(lines.length).toBeGreaterThan(5);
    expect(lines).toContain("instance-id");
    expect(lines).toContain("services/");
  });

  it("should fetch metadata successfully (without token -- disableFetchToken set to true)", async () => {
    if (!metadataServiceAvailable) {
      return;
    }
    metadataService.disableFetchToken = true; // make request without token
    const metadata = (await metadataService.request("/latest/meta-data/", {})) as string;
    expect(metadata).toBeDefined();
    expect(typeof metadata).toBe("string");
    expect(metadata.length).toBeGreaterThan(0);
    const lines = metadata.split("\n").map((line) => line.trim());
    expect(lines.length).toBeGreaterThan(5);
    expect(lines).toContain("instance-id");
    expect(lines).toContain("services/");
  });

  it("should handle TimeoutError by falling back to IMDSv1", async () => {
    if (!metadataServiceAvailable) {
      return;
    }
    vi.spyOn(metadataService, "fetchMetadataToken").mockImplementation(async () => {
      throw { name: "TimeoutError" }; // Simulating TimeoutError
    });
    // Attempt to fetch metadata, expecting IMDSv1 fallback (request without token)
    const metadata = (await metadataService.request("/latest/meta-data/", {})) as string;
    expect(metadata).toBeDefined();
    expect(typeof metadata).toBe("string");
    const lines = metadata.split("\n").map((line) => line.trim());
    expect(lines.length).toBeGreaterThan(5);
    expect(lines).toContain("instance-id");
    expect(lines).toContain("services/");
  });

  it("should handle specific error codes by falling back to IMDSv1", async () => {
    if (!metadataServiceAvailable) {
      return;
    }
    const httpErrors = [403, 404, 405];
    for (const errorCode of httpErrors) {
      vi.spyOn(metadataService, "fetchMetadataToken").mockImplementationOnce(async () => {
        throw { statusCode: errorCode };
      });
      const metadata = (await metadataService.request("/latest/meta-data/", {})) as string;
      expect(metadata).toBeDefined();
      expect(typeof metadata).toBe("string");
      const lines = metadata.split("\n").map((line) => line.trim());
      expect(lines.length).toBeGreaterThan(5);
      expect(lines).toContain("instance-id");
      expect(lines).toContain("services/");
    }
  });

  it("should timeout as expected when a request exceeds the specified duration", async () => {
    if (!metadataServiceAvailable) {
      return;
    }
    metadataService = new MetadataService({ httpOptions: { timeout: 0.1 } }); // 0.1ms timeout for testing
    try {
      await metadataService.request("/latest/meta-data/", {});
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toMatch(/TimeoutError/);
    }
  });
});
