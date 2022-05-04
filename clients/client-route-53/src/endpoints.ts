// smithy-typescript generated code
import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "aws-cn-global": {
    variants: [
      {
        hostname: "route53.amazonaws.com.cn",
        tags: [],
      },
    ],
    signingRegion: "cn-northwest-1",
  },
  "aws-global": {
    variants: [
      {
        hostname: "route53.amazonaws.com",
        tags: [],
      },
      {
        hostname: "route53-fips.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-east-1",
  },
  "aws-iso-b-global": {
    variants: [
      {
        hostname: "route53.sc2s.sgov.gov",
        tags: [],
      },
    ],
    signingRegion: "us-isob-east-1",
  },
  "aws-iso-global": {
    variants: [
      {
        hostname: "route53.c2s.ic.gov",
        tags: [],
      },
    ],
    signingRegion: "us-iso-east-1",
  },
  "aws-us-gov-global": {
    variants: [
      {
        hostname: "route53.us-gov.amazonaws.com",
        tags: [],
      },
      {
        hostname: "route53.us-gov.amazonaws.com",
        tags: ["fips"],
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
      "fips-aws-global",
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
        hostname: "route53.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "route53-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "route53-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "route53.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
    endpoint: "aws-global",
  },
  "aws-cn": {
    regions: ["aws-cn-global", "cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "route53.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "route53-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "route53-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "route53.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
    endpoint: "aws-cn-global",
  },
  "aws-iso": {
    regions: ["aws-iso-global", "us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "route53.{region}.c2s.ic.gov",
        tags: [],
      },
      {
        hostname: "route53-fips.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
    endpoint: "aws-iso-global",
  },
  "aws-iso-b": {
    regions: ["aws-iso-b-global", "us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "route53.{region}.sc2s.sgov.gov",
        tags: [],
      },
      {
        hostname: "route53-fips.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
    endpoint: "aws-iso-b-global",
  },
  "aws-us-gov": {
    regions: ["aws-us-gov-global", "fips-aws-us-gov-global", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "route53.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "route53-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "route53-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "route53.{region}.api.aws",
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
    signingService: "route53",
    regionHash,
    partitionHash,
  });
