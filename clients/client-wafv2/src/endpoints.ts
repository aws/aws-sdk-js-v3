// smithy-typescript generated code
import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "af-south-1": {
    variants: [
      {
        hostname: "wafv2.af-south-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.af-south-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "af-south-1",
  },
  "ap-east-1": {
    variants: [
      {
        hostname: "wafv2.ap-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.ap-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "ap-east-1",
  },
  "ap-northeast-1": {
    variants: [
      {
        hostname: "wafv2.ap-northeast-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.ap-northeast-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "ap-northeast-1",
  },
  "ap-northeast-2": {
    variants: [
      {
        hostname: "wafv2.ap-northeast-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.ap-northeast-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "ap-northeast-2",
  },
  "ap-northeast-3": {
    variants: [
      {
        hostname: "wafv2.ap-northeast-3.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.ap-northeast-3.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "ap-northeast-3",
  },
  "ap-south-1": {
    variants: [
      {
        hostname: "wafv2.ap-south-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.ap-south-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "ap-south-1",
  },
  "ap-southeast-1": {
    variants: [
      {
        hostname: "wafv2.ap-southeast-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.ap-southeast-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "ap-southeast-1",
  },
  "ap-southeast-2": {
    variants: [
      {
        hostname: "wafv2.ap-southeast-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.ap-southeast-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "ap-southeast-2",
  },
  "ap-southeast-3": {
    variants: [
      {
        hostname: "wafv2.ap-southeast-3.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.ap-southeast-3.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "ap-southeast-3",
  },
  "ca-central-1": {
    variants: [
      {
        hostname: "wafv2.ca-central-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "ca-central-1",
  },
  "cn-north-1": {
    variants: [
      {
        hostname: "wafv2.cn-north-1.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "wafv2-fips.cn-north-1.amazonaws.com.cn",
        tags: ["fips"],
      },
    ],
    signingRegion: "cn-north-1",
  },
  "cn-northwest-1": {
    variants: [
      {
        hostname: "wafv2.cn-northwest-1.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "wafv2-fips.cn-northwest-1.amazonaws.com.cn",
        tags: ["fips"],
      },
    ],
    signingRegion: "cn-northwest-1",
  },
  "eu-central-1": {
    variants: [
      {
        hostname: "wafv2.eu-central-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.eu-central-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "eu-central-1",
  },
  "eu-north-1": {
    variants: [
      {
        hostname: "wafv2.eu-north-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.eu-north-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "eu-north-1",
  },
  "eu-south-1": {
    variants: [
      {
        hostname: "wafv2.eu-south-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.eu-south-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "eu-south-1",
  },
  "eu-west-1": {
    variants: [
      {
        hostname: "wafv2.eu-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.eu-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "eu-west-1",
  },
  "eu-west-2": {
    variants: [
      {
        hostname: "wafv2.eu-west-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.eu-west-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "eu-west-2",
  },
  "eu-west-3": {
    variants: [
      {
        hostname: "wafv2.eu-west-3.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.eu-west-3.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "eu-west-3",
  },
  "me-south-1": {
    variants: [
      {
        hostname: "wafv2.me-south-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.me-south-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "me-south-1",
  },
  "sa-east-1": {
    variants: [
      {
        hostname: "wafv2.sa-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.sa-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "sa-east-1",
  },
  "us-east-1": {
    variants: [
      {
        hostname: "wafv2.us-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-east-1",
  },
  "us-east-2": {
    variants: [
      {
        hostname: "wafv2.us-east-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-east-2",
  },
  "us-gov-east-1": {
    variants: [
      {
        hostname: "wafv2.us-gov-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "us-gov-west-1": {
    variants: [
      {
        hostname: "wafv2.us-gov-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "us-west-1": {
    variants: [
      {
        hostname: "wafv2.us-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-west-1",
  },
  "us-west-2": {
    variants: [
      {
        hostname: "wafv2.us-west-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
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
      "fips-ap-northeast-3",
      "fips-ap-south-1",
      "fips-ap-southeast-1",
      "fips-ap-southeast-2",
      "fips-ap-southeast-3",
      "fips-ca-central-1",
      "fips-eu-central-1",
      "fips-eu-north-1",
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
        hostname: "wafv2.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "wafv2-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "wafv2.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1", "fips-cn-north-1", "fips-cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "wafv2.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "wafv2-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "wafv2-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "wafv2.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "wafv2.{region}.c2s.ic.gov",
        tags: [],
      },
      {
        hostname: "wafv2-fips.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "wafv2.{region}.sc2s.sgov.gov",
        tags: [],
      },
      {
        hostname: "wafv2-fips.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["fips-us-gov-east-1", "fips-us-gov-west-1", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "wafv2.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "wafv2-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "wafv2-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "wafv2.{region}.api.aws",
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
    signingService: "wafv2",
    regionHash,
    partitionHash,
  });
