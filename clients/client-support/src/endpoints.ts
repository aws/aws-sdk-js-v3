// smithy-typescript generated code
import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "aws-cn-global": {
    variants: [
      {
        hostname: "support.cn-north-1.amazonaws.com.cn",
        tags: [],
      },
    ],
    signingRegion: "cn-north-1",
  },
  "aws-global": {
    variants: [
      {
        hostname: "support.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "aws-iso-b-global": {
    variants: [
      {
        hostname: "support.us-isob-east-1.sc2s.sgov.gov",
        tags: [],
      },
    ],
    signingRegion: "us-isob-east-1",
  },
  "aws-iso-global": {
    variants: [
      {
        hostname: "support.us-iso-east-1.c2s.ic.gov",
        tags: [],
      },
    ],
    signingRegion: "us-iso-east-1",
  },
  "aws-us-gov-global": {
    variants: [
      {
        hostname: "support.us-gov-west-1.amazonaws.com",
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
      "ap-southeast-3",
      "aws-global",
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
    variants: [
      {
        hostname: "support.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "support-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "support-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "support.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["aws-cn-global", "cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "support.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "support-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "support-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "support.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["aws-iso-global", "us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "support.{region}.c2s.ic.gov",
        tags: [],
      },
      {
        hostname: "support-fips.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["aws-iso-b-global", "us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "support.{region}.sc2s.sgov.gov",
        tags: [],
      },
      {
        hostname: "support-fips.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["aws-us-gov-global", "fips-us-gov-west-1", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "support.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "support-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "support-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "support.{region}.api.aws",
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
    signingService: "support",
    regionHash,
    partitionHash,
  });
