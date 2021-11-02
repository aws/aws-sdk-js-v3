import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "aws-cn-global": {
    hostname: "organizations.cn-northwest-1.amazonaws.com.cn",
    variants: [
      {
        hostname: "organizations.cn-northwest-1.amazonaws.com.cn",
        tags: [],
      },
    ],
    signingRegion: "cn-northwest-1",
  },
  "aws-global": {
    hostname: "organizations.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "organizations.us-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "organizations-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-east-1",
  },
  "aws-us-gov-global": {
    hostname: "organizations.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "organizations.us-gov-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "organizations.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "fips-aws-global": {
    hostname: "organizations-fips.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "organizations-fips.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "fips-aws-us-gov-global": {
    hostname: "organizations.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "organizations.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
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
      "aws-global",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "fips-aws-global",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    hostname: "organizations.{region}.amazonaws.com",
    variants: [
      {
        hostname: "organizations.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "organizations-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "organizations-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "organizations.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
    endpoint: "aws-global",
  },
  "aws-cn": {
    regions: ["aws-cn-global", "cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "organizations.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "organizations.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "organizations-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "organizations-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "organizations.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
    endpoint: "aws-cn-global",
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "organizations.{region}.c2s.ic.gov",
    variants: [
      {
        hostname: "organizations.{region}.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "organizations.{region}.sc2s.sgov.gov",
    variants: [
      {
        hostname: "organizations.{region}.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["aws-us-gov-global", "fips-aws-us-gov-global", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "organizations.{region}.amazonaws.com",
    variants: [
      {
        hostname: "organizations.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "organizations-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "organizations-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "organizations.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
    endpoint: "aws-us-gov-global",
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (
  region: string,
  options?: RegionInfoProviderOptions
) =>
  getRegionInfo(region, {
    ...options,
    signingService: "organizations",
    regionHash,
    partitionHash,
  });
