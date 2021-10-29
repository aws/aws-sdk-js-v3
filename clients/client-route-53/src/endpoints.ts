import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "aws-cn-global": {
    hostname: "route53.amazonaws.com.cn",
    signingRegion: "cn-northwest-1",
  },
  "aws-global": {
    hostname: "route53.amazonaws.com",
    variants: [
      {
        hostname: "route53-fips.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-east-1",
  },
  "aws-iso-b-global": {
    hostname: "route53.sc2s.sgov.gov",
    signingRegion: "us-isob-east-1",
  },
  "aws-iso-global": {
    hostname: "route53.c2s.ic.gov",
    signingRegion: "us-iso-east-1",
  },
  "aws-us-gov-global": {
    hostname: "route53.us-gov.amazonaws.com",
    variants: [
      {
        hostname: "route53.us-gov.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "fips-aws-global": {
    hostname: "route53-fips.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "fips-aws-us-gov-global": {
    hostname: "route53.us-gov.amazonaws.com",
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
    endpoint: "aws-global",
    variants: [
      {
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        dnsSuffix: "amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        dnsSuffix: "api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "{service}.{region}.{dnsSuffix}",
        dnsSuffix: "api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["aws-cn-global", "cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    endpoint: "aws-cn-global",
    variants: [
      {
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        dnsSuffix: "amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        dnsSuffix: "api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "{service}.{region}.{dnsSuffix}",
        dnsSuffix: "api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["aws-iso-global", "us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    endpoint: "aws-iso-global",
  },
  "aws-iso-b": {
    regions: ["aws-iso-b-global", "us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    endpoint: "aws-iso-b-global",
  },
  "aws-us-gov": {
    regions: ["aws-us-gov-global", "fips-aws-us-gov-global", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    endpoint: "aws-us-gov-global",
    variants: [
      {
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        dnsSuffix: "amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        dnsSuffix: "api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "{service}.{region}.{dnsSuffix}",
        dnsSuffix: "api.aws",
        tags: ["dualstack"],
      },
    ],
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (region: string, options?: any) =>
  getRegionInfo(region, {
    ...options,
    signingService: "route53",
    regionHash,
    partitionHash,
  });
