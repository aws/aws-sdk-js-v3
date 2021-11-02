import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {};

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
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    hostname: "api.pricing.{region}.amazonaws.com",
    variants: [
      {
        hostname: "api.pricing.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "api.pricing-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "api.pricing-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "api.pricing.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "api.pricing.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "api.pricing.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "api.pricing-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "api.pricing-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "api.pricing.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "api.pricing.{region}.c2s.ic.gov",
    variants: [
      {
        hostname: "api.pricing.{region}.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "api.pricing.{region}.sc2s.sgov.gov",
    variants: [
      {
        hostname: "api.pricing.{region}.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "api.pricing.{region}.amazonaws.com",
    variants: [
      {
        hostname: "api.pricing.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "api.pricing-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "api.pricing-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "api.pricing.{region}.api.aws",
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
    signingService: "pricing",
    regionHash,
    partitionHash,
  });
