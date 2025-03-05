import { MetadataService } from "@aws-sdk/ec2-metadata-service";
import { loadSharedConfigFiles } from "@smithy/shared-ini-file-loader";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { getRegionFromIni, regionFromMetadataService, resolveAwsCliV2Region } from "./resolveAwsCliV2Region";

//Mock the dependencies
vi.mock("@aws-sdk/ec2-metadata-service");
vi.mock("@smithy/shared-ini-file-loader", () => ({
  loadSharedConfigFiles: vi.fn(),
}));

describe("AWS Region Resolution", () => {
  // Store original environment variables to restore them later
  const originalEnv = { ...process.env };

  beforeEach(() => {
    // Reset environment variables before each test
    process.env = { ...originalEnv };
    // Clear all mock data before each test
    vi.clearAllMocks();
  });

  afterEach(() => {
    // Restore environment variables after each test
    process.env = { ...originalEnv };
  });

  describe("resolveAwsCliV2Region", () => {
    it("should use AWS_REGION from environment variables", async () => {
      process.env.AWS_REGION = "us-west-2";
      const region = await resolveAwsCliV2Region({});
      expect(region).toBe("us-west-2");
    });

    it("should fall back to AWS_DEFAULT_REGION if AWS_REGION is empty", async () => {
      process.env.AWS_REGION = "";
      process.env.AWS_DEFAULT_REGION = "eu-west-1";
      const region = await resolveAwsCliV2Region({});
      expect(region).toBe("eu-west-1");
    });

    it("should use defaultRegion when no other source is available", async () => {
      const consoleSpy = vi.spyOn(console, "warn");
      const region = await resolveAwsCliV2Region({ defaultRegion: "ap-southeast-1" });
      expect(region).toBe("ap-southeast-1");
      expect(consoleSpy).toHaveBeenCalled();
    });

    it("should return undefined when no region is available and no default region is provided", async () => {
      const consoleSpy = vi.spyOn(console, "warn");
      const region = await resolveAwsCliV2Region({});
      expect(region).toBeUndefined();
      expect(consoleSpy).toHaveBeenCalled();
    });

    it("should use specified profile", async () => {
      vi.mocked(loadSharedConfigFiles).mockResolvedValue({
        configFile: {
          "custom-profile": {
            region: "us-east-1",
          },
        },
        credentialsFile: {},
      });

      const region = await resolveAwsCliV2Region({ profile: "custom-profile" });
      expect(region).toBe("us-east-1");
    });
  });

  describe("getRegionFromIni", () => {
    it("should get region from config file", async () => {
      vi.mocked(loadSharedConfigFiles).mockResolvedValue({
        configFile: {
          default: {
            region: "us-east-2",
          },
        },
        credentialsFile: {},
      });

      const region = await getRegionFromIni("default");
      expect(region).toBe("us-east-2");
    });

    it("should fall back to credentials file", async () => {
      vi.mocked(loadSharedConfigFiles).mockResolvedValue({
        configFile: {},
        credentialsFile: {
          default: {
            region: "eu-central-1",
          },
        },
      });

      const region = await getRegionFromIni("default");
      expect(region).toBe("eu-central-1");
    });

    it("should return undefined when no region is found", async () => {
      vi.mocked(loadSharedConfigFiles).mockResolvedValue({
        configFile: {},
        credentialsFile: {},
      });

      const region = await getRegionFromIni("default");
      expect(region).toBeUndefined();
    });
  });

  describe("regionFromMetadataService", () => {
    it("should get region from EC2 metadata service", async () => {
      vi.mocked(MetadataService).mockImplementation(
        () =>
          ({
            request: vi.fn().mockResolvedValue(JSON.stringify({ region: "us-west-1" })),
          } as any)
      );

      const region = await regionFromMetadataService();
      expect(region).toBe("us-west-1");
    });

    it("should handle metadata service errors", async () => {
      vi.mocked(MetadataService).mockImplementation(
        () =>
          ({
            request: vi.fn().mockRejectedValue(new Error("IMDS not available")),
          } as any)
      );

      const consoleSpy = vi.spyOn(console, "warn");
      const region = await regionFromMetadataService();

      expect(region).toBeUndefined();
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("IMDS not available"));
    });
  });
});
