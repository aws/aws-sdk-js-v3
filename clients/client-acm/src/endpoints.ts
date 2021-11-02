import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "ca-central-1": {
    hostname: "acm.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "acm.ca-central-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "acm-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ca-central-1-fips": {
    hostname: "acm-fips.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "acm-fips.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ca-central-1",
  },
  "us-east-1": {
    hostname: "acm.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "acm.us-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "acm-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-1-fips": {
    hostname: "acm-fips.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "acm-fips.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "us-east-2": {
    hostname: "acm.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "acm.us-east-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "acm-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-2-fips": {
    hostname: "acm-fips.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "acm-fips.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-2",
  },
  "us-gov-east-1": {
    hostname: "acm.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "acm.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "us-gov-west-1": {
    hostname: "acm.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "acm.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "us-west-1": {
    hostname: "acm.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "acm.us-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "acm-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-1-fips": {
    hostname: "acm-fips.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "acm-fips.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-1",
  },
  "us-west-2": {
    hostname: "acm.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "acm.us-west-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "acm-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-2-fips": {
    hostname: "acm-fips.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "acm-fips.us-west-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-2",
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
      "ca-central-1-fips",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-1-fips",
      "us-east-2",
      "us-east-2-fips",
      "us-west-1",
      "us-west-1-fips",
      "us-west-2",
      "us-west-2-fips",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    hostname: "acm.{region}.amazonaws.com",
    variants: [
      {
        hostname: "acm.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "acm-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "acm-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "acm.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "acm.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "acm.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "acm-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "acm-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "acm.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "acm.{region}.c2s.ic.gov",
    variants: [
      {
        hostname: "acm.{region}.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "acm.{region}.sc2s.sgov.gov",
    variants: [
      {
        hostname: "acm.{region}.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "acm.{region}.amazonaws.com",
    variants: [
      {
        hostname: "acm.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "acm-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "acm-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "acm.{region}.api.aws",
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
    signingService: "acm",
    regionHash,
    partitionHash,
  });
