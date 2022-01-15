import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "af-south-1": {
    variants: [
      {
        hostname: "fms-fips.af-south-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-east-1": {
    variants: [
      {
        hostname: "fms-fips.ap-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-northeast-1": {
    variants: [
      {
        hostname: "fms-fips.ap-northeast-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-northeast-2": {
    variants: [
      {
        hostname: "fms-fips.ap-northeast-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-south-1": {
    variants: [
      {
        hostname: "fms-fips.ap-south-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-southeast-1": {
    variants: [
      {
        hostname: "fms-fips.ap-southeast-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-southeast-2": {
    variants: [
      {
        hostname: "fms-fips.ap-southeast-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ca-central-1": {
    variants: [
      {
        hostname: "fms-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "eu-central-1": {
    variants: [
      {
        hostname: "fms-fips.eu-central-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "eu-south-1": {
    variants: [
      {
        hostname: "fms-fips.eu-south-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "eu-west-1": {
    variants: [
      {
        hostname: "fms-fips.eu-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "eu-west-2": {
    variants: [
      {
        hostname: "fms-fips.eu-west-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "eu-west-3": {
    variants: [
      {
        hostname: "fms-fips.eu-west-3.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "me-south-1": {
    variants: [
      {
        hostname: "fms-fips.me-south-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "sa-east-1": {
    variants: [
      {
        hostname: "fms-fips.sa-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-1": {
    variants: [
      {
        hostname: "fms-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-2": {
    variants: [
      {
        hostname: "fms-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-east-1": {
    variants: [
      {
        hostname: "fms-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-west-1": {
    variants: [
      {
        hostname: "fms-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-1": {
    variants: [
      {
        hostname: "fms-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-2": {
    variants: [
      {
        hostname: "fms-fips.us-west-2.amazonaws.com",
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
      "fips-af-south-1",
      "fips-ap-east-1",
      "fips-ap-northeast-1",
      "fips-ap-northeast-2",
      "fips-ap-south-1",
      "fips-ap-southeast-1",
      "fips-ap-southeast-2",
      "fips-ca-central-1",
      "fips-eu-central-1",
      "fips-eu-south-1",
      "fips-eu-west-1",
      "fips-eu-west-2",
      "fips-eu-west-3",
      "fips-me-south-1",
      "fips-sa-east-1",
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
        hostname: "fms.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fms-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "fms-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "fms.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "fms.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "fms-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "fms-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "fms.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "fms.{region}.c2s.ic.gov",
        tags: [],
      },
      {
        hostname: "fms-fips.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "fms.{region}.sc2s.sgov.gov",
        tags: [],
      },
      {
        hostname: "fms-fips.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["fips-us-gov-east-1", "fips-us-gov-west-1", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "fms.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fms-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "fms-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "fms.{region}.api.aws",
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
    signingService: "fms",
    regionHash,
    partitionHash,
  });
