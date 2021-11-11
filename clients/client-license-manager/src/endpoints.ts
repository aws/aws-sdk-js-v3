import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "us-east-1": {
    variants: [
      {
        hostname: "license-manager.us-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "license-manager-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-2": {
    variants: [
      {
        hostname: "license-manager.us-east-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "license-manager-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-east-1": {
    variants: [
      {
        hostname: "license-manager.us-gov-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "license-manager-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-west-1": {
    variants: [
      {
        hostname: "license-manager.us-gov-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "license-manager-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-1": {
    variants: [
      {
        hostname: "license-manager.us-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "license-manager-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-2": {
    variants: [
      {
        hostname: "license-manager.us-west-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "license-manager-fips.us-west-2.amazonaws.com",
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
      "fips-us-east-2",
      "fips-us-west-1",
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
        hostname: "license-manager.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "license-manager-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "license-manager-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "license-manager.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "license-manager.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "license-manager-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "license-manager-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "license-manager.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "license-manager.{region}.c2s.ic.gov",
        tags: [],
      },
      {
        hostname: "license-manager-fips.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "license-manager.{region}.sc2s.sgov.gov",
        tags: [],
      },
      {
        hostname: "license-manager-fips.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["fips-us-gov-east-1", "fips-us-gov-west-1", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "license-manager.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "license-manager-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "license-manager-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "license-manager.{region}.api.aws",
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
    signingService: "license-manager",
    regionHash,
    partitionHash,
  });
