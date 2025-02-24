import { MetadataService } from "@aws-sdk/ec2-metadata-service";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { getRegionFromIni, regionFromMetadataService, resolveAwsCliV2Region } from "./resolveAwsCliV2Region";

// Mock the external dependencies
vi.mock("@smithy/node-config-provider", () => ({
  fromSharedConfigFiles: vi.fn(),
}));

vi.mock("@aws-sdk/ec2-metadata-service", () => ({
  MetadataService: vi.fn(),
}));

describe("resolveAwsCliV2Region", () => {
  beforeEach(() => {
    // Clear all environment variables before each test
    vi.resetModules();
    process.env = {};
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should return AWS_REGION if set", async () => {
    process.env.AWS_REGION = "us-west-2";
    const region = await resolveAwsCliV2Region({});
    expect(region).toBe("us-west-2");
  });

  it("should return AWS_DEFAULT_REGION if AWS_REGION is not set", async () => {
    process.env.AWS_DEFAULT_REGION = "eu-west-1";
    const region = await resolveAwsCliV2Region({});
    expect(region).toBe("eu-west-1");
  });

  it("should use defaultRegion if no region is found", async () => {
    const consoleSpy = vi.spyOn(console, "warn");
    const region = await resolveAwsCliV2Region({ defaultRegion: "ap-southeast-1" });
    expect(region).toBe("ap-southeast-1");
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("should return undefined if no region is found and no default is provided", async () => {
    const consoleSpy = vi.spyOn(console, "warn");
    const region = await resolveAwsCliV2Region({});
    expect(region).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("should use provided profile", async () => {
    const region = await resolveAwsCliV2Region({ profile: "custom-profile" });
    expect(region).toBeUndefined();
  });

  it("should prioritize AWS_REGION over AWS_DEFAULT_REGION and profile", async () => {
    // Set up all region sources
    process.env.AWS_REGION = "us-west-2";
    process.env.AWS_DEFAULT_REGION = "eu-west-1";

    // Mock shared config files
    const mockSharedFiles = {
      configFile: {
        "custom-profile": {
          region: "ap-southeast-1",
        },
      },
      credentialsFile: {},
    };
    vi.mocked(fromSharedConfigFiles).mockResolvedValue(mockSharedFiles);

    const region = await resolveAwsCliV2Region({
      defaultRegion: "ca-central-1",
      profile: "custom-profile",
    });

    // Verify AWS_REGION takes precedence
    expect(region).toBe("us-west-2");
    // Verify other sources weren't consulted
    expect(fromSharedConfigFiles).not.toHaveBeenCalled();
  });
});

describe("getRegionFromIni", () => {
  it("should return region from config file", async () => {
    const mockSharedFiles = {
      configFile: {
        default: {
          region: "us-east-1",
        },
      },
      credentialsFile: {},
    };

    vi.mocked(fromSharedConfigFiles).mockResolvedValue(mockSharedFiles);

    const region = await getRegionFromIni("default");
    expect(region).toBe("us-east-1");
  });

  it("should return region from credentials file if not in config file", async () => {
    const mockSharedFiles = {
      configFile: {},
      credentialsFile: {
        default: {
          region: "eu-central-1",
        },
      },
    };

    vi.mocked(fromSharedConfigFiles).mockResolvedValue(mockSharedFiles);

    const region = await getRegionFromIni("default");
    expect(region).toBe("eu-central-1");
  });
});

describe("regionFromMetadataService", () => {
  it("should return region from metadata service", async () => {
    const mockMetadataService = {
      request: vi.fn().mockResolvedValue(JSON.stringify({ region: "us-west-1" })),
    };

    vi.mocked(MetadataService).mockImplementation(() => mockMetadataService as any);

    const region = await regionFromMetadataService();
    expect(region).toBe("us-west-1");
  });

  it("should return undefined if metadata service fails", async () => {
    const mockMetadataService = {
      request: vi.fn().mockRejectedValue(new Error("IMDS error")),
    };

    vi.mocked(MetadataService).mockImplementation(() => mockMetadataService as any);

    const region = await regionFromMetadataService();
    expect(region).toBeUndefined();
  });
});
