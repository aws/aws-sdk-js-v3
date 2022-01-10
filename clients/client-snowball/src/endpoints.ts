import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "ap-northeast-1": {
    variants: [
      {
        hostname: "snowball-fips.ap-northeast-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-northeast-2": {
    variants: [
      {
        hostname: "snowball-fips.ap-northeast-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-northeast-3": {
    variants: [
      {
        hostname: "snowball-fips.ap-northeast-3.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-south-1": {
    variants: [
      {
        hostname: "snowball-fips.ap-south-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-southeast-1": {
    variants: [
      {
        hostname: "snowball-fips.ap-southeast-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-southeast-2": {
    variants: [
      {
        hostname: "snowball-fips.ap-southeast-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ca-central-1": {
    variants: [
      {
        hostname: "snowball-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "cn-north-1": {
    variants: [
      {
        hostname: "snowball-fips.cn-north-1.amazonaws.com.cn",
        tags: ["fips"],
      },
    ],
  },
  "cn-northwest-1": {
    variants: [
      {
        hostname: "snowball-fips.cn-northwest-1.amazonaws.com.cn",
        tags: ["fips"],
      },
    ],
  },
  "eu-central-1": {
    variants: [
      {
        hostname: "snowball-fips.eu-central-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "eu-west-1": {
    variants: [
      {
        hostname: "snowball-fips.eu-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "eu-west-2": {
    variants: [
      {
        hostname: "snowball-fips.eu-west-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "eu-west-3": {
    variants: [
      {
        hostname: "snowball-fips.eu-west-3.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "sa-east-1": {
    variants: [
      {
        hostname: "snowball-fips.sa-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-1": {
    variants: [
      {
        hostname: "snowball-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-2": {
    variants: [
      {
        hostname: "snowball-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-east-1": {
    variants: [
      {
        hostname: "snowball-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-west-1": {
    variants: [
      {
        hostname: "snowball-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-1": {
    variants: [
      {
        hostname: "snowball-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-2": {
    variants: [
      {
        hostname: "snowball-fips.us-west-2.amazonaws.com",
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
      "fips-ap-northeast-1",
      "fips-ap-northeast-2",
      "fips-ap-northeast-3",
      "fips-ap-south-1",
      "fips-ap-southeast-1",
      "fips-ap-southeast-2",
      "fips-ca-central-1",
      "fips-eu-central-1",
      "fips-eu-west-1",
      "fips-eu-west-2",
      "fips-eu-west-3",
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
        hostname: "snowball.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "snowball-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "snowball.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1", "fips-cn-north-1", "fips-cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "snowball.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "snowball-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "snowball-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "snowball.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "snowball.{region}.c2s.ic.gov",
        tags: [],
      },
      {
        hostname: "snowball-fips.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "snowball.{region}.sc2s.sgov.gov",
        tags: [],
      },
      {
        hostname: "snowball-fips.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["fips-us-gov-east-1", "fips-us-gov-west-1", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "snowball.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "snowball-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "snowball.{region}.api.aws",
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
    signingService: "snowball",
    regionHash,
    partitionHash,
  });
