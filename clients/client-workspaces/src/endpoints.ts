import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "fips-us-east-1": {
    hostname: "workspaces-fips.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "workspaces-fips.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "fips-us-gov-west-1": {
    hostname: "workspaces-fips.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "workspaces-fips.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "fips-us-west-2": {
    hostname: "workspaces-fips.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "workspaces-fips.us-west-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-2",
  },
  "us-east-1": {
    hostname: "workspaces.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "workspaces.us-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "workspaces-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-west-1": {
    hostname: "workspaces.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "workspaces.us-gov-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "workspaces-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-2": {
    hostname: "workspaces.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "workspaces.us-west-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "workspaces-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
};

const partitionHash: PartitionHash = {
  aws: {
    regions: [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "fips-us-east-1",
      "fips-us-west-2",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    hostname: "workspaces.{region}.amazonaws.com",
    variants: [
      {
        hostname: "workspaces.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "workspaces-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "workspaces-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "workspaces.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "workspaces.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "workspaces.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "workspaces-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "workspaces-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "workspaces.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "workspaces.{region}.c2s.ic.gov",
    variants: [
      {
        hostname: "workspaces.{region}.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "workspaces.{region}.sc2s.sgov.gov",
    variants: [
      {
        hostname: "workspaces.{region}.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["fips-us-gov-west-1", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "workspaces.{region}.amazonaws.com",
    variants: [
      {
        hostname: "workspaces.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "workspaces-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "workspaces-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "workspaces.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (
  region: string,
  options?: RegionInfoProviderOptions
) =>
  getRegionInfo(region, {
    ...options,
    signingService: "workspaces",
    regionHash,
    partitionHash,
  });
