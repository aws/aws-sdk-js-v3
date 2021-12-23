import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "us-east-1": {
    variants: [
      {
        hostname: "comprehend.us-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "comprehend-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-2": {
    variants: [
      {
        hostname: "comprehend.us-east-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "comprehend-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-west-1": {
    variants: [
      {
        hostname: "comprehend.us-gov-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "comprehend-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-2": {
    variants: [
      {
        hostname: "comprehend.us-west-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "comprehend-fips.us-west-2.amazonaws.com",
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
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "fips-us-east-1",
      "fips-us-east-2",
      "fips-us-west-2",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "comprehend.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "comprehend-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "comprehend-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "comprehend.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "comprehend.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "comprehend-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "comprehend-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "comprehend.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "comprehend.{region}.c2s.ic.gov",
        tags: [],
      },
      {
        hostname: "comprehend-fips.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "comprehend.{region}.sc2s.sgov.gov",
        tags: [],
      },
      {
        hostname: "comprehend-fips.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["fips-us-gov-west-1", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "comprehend.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "comprehend-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "comprehend-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "comprehend.{region}.api.aws",
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
    signingService: "comprehend",
    regionHash,
    partitionHash,
  });
