import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider } from "@aws-sdk/types";

const regionHash: RegionHash = {
  ProdFips: {
    hostname: "kms-fips.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "af-south-1": {
    variants: [
      {
        hostname: "kms-fips.af-south-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "af-south-1-fips": {
    hostname: "kms-fips.af-south-1.amazonaws.com",
    signingRegion: "af-south-1",
  },
  "ap-east-1": {
    variants: [
      {
        hostname: "kms-fips.ap-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-east-1-fips": {
    hostname: "kms-fips.ap-east-1.amazonaws.com",
    signingRegion: "ap-east-1",
  },
  "ap-northeast-1": {
    variants: [
      {
        hostname: "kms-fips.ap-northeast-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-northeast-1-fips": {
    hostname: "kms-fips.ap-northeast-1.amazonaws.com",
    signingRegion: "ap-northeast-1",
  },
  "ap-northeast-2": {
    variants: [
      {
        hostname: "kms-fips.ap-northeast-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-northeast-2-fips": {
    hostname: "kms-fips.ap-northeast-2.amazonaws.com",
    signingRegion: "ap-northeast-2",
  },
  "ap-northeast-3": {
    variants: [
      {
        hostname: "kms-fips.ap-northeast-3.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-northeast-3-fips": {
    hostname: "kms-fips.ap-northeast-3.amazonaws.com",
    signingRegion: "ap-northeast-3",
  },
  "ap-south-1": {
    variants: [
      {
        hostname: "kms-fips.ap-south-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-south-1-fips": {
    hostname: "kms-fips.ap-south-1.amazonaws.com",
    signingRegion: "ap-south-1",
  },
  "ap-southeast-1": {
    variants: [
      {
        hostname: "kms-fips.ap-southeast-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-southeast-1-fips": {
    hostname: "kms-fips.ap-southeast-1.amazonaws.com",
    signingRegion: "ap-southeast-1",
  },
  "ap-southeast-2": {
    variants: [
      {
        hostname: "kms-fips.ap-southeast-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ap-southeast-2-fips": {
    hostname: "kms-fips.ap-southeast-2.amazonaws.com",
    signingRegion: "ap-southeast-2",
  },
  "ca-central-1": {
    variants: [
      {
        hostname: "kms-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ca-central-1-fips": {
    hostname: "kms-fips.ca-central-1.amazonaws.com",
    signingRegion: "ca-central-1",
  },
  "eu-central-1": {
    variants: [
      {
        hostname: "kms-fips.eu-central-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "eu-central-1-fips": {
    hostname: "kms-fips.eu-central-1.amazonaws.com",
    signingRegion: "eu-central-1",
  },
  "eu-north-1": {
    variants: [
      {
        hostname: "kms-fips.eu-north-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "eu-north-1-fips": {
    hostname: "kms-fips.eu-north-1.amazonaws.com",
    signingRegion: "eu-north-1",
  },
  "eu-south-1": {
    variants: [
      {
        hostname: "kms-fips.eu-south-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "eu-south-1-fips": {
    hostname: "kms-fips.eu-south-1.amazonaws.com",
    signingRegion: "eu-south-1",
  },
  "eu-west-1": {
    variants: [
      {
        hostname: "kms-fips.eu-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "eu-west-1-fips": {
    hostname: "kms-fips.eu-west-1.amazonaws.com",
    signingRegion: "eu-west-1",
  },
  "eu-west-2": {
    variants: [
      {
        hostname: "kms-fips.eu-west-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "eu-west-2-fips": {
    hostname: "kms-fips.eu-west-2.amazonaws.com",
    signingRegion: "eu-west-2",
  },
  "eu-west-3": {
    variants: [
      {
        hostname: "kms-fips.eu-west-3.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "eu-west-3-fips": {
    hostname: "kms-fips.eu-west-3.amazonaws.com",
    signingRegion: "eu-west-3",
  },
  "me-south-1": {
    variants: [
      {
        hostname: "kms-fips.me-south-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "me-south-1-fips": {
    hostname: "kms-fips.me-south-1.amazonaws.com",
    signingRegion: "me-south-1",
  },
  "sa-east-1": {
    variants: [
      {
        hostname: "kms-fips.sa-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "sa-east-1-fips": {
    hostname: "kms-fips.sa-east-1.amazonaws.com",
    signingRegion: "sa-east-1",
  },
  "us-east-1": {
    variants: [
      {
        hostname: "kms-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-1-fips": {
    hostname: "kms-fips.us-east-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "us-east-2": {
    variants: [
      {
        hostname: "kms-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-2-fips": {
    hostname: "kms-fips.us-east-2.amazonaws.com",
    signingRegion: "us-east-2",
  },
  "us-gov-east-1": {
    variants: [
      {
        hostname: "kms-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-east-1-fips": {
    hostname: "kms-fips.us-gov-east-1.amazonaws.com",
    signingRegion: "us-gov-east-1",
  },
  "us-gov-west-1": {
    variants: [
      {
        hostname: "kms-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-west-1-fips": {
    hostname: "kms-fips.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "us-iso-east-1": {
    variants: [
      {
        hostname: "kms-fips.us-iso-east-1.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "us-iso-east-1-fips": {
    hostname: "kms-fips.us-iso-east-1.c2s.ic.gov",
    signingRegion: "us-iso-east-1",
  },
  "us-iso-west-1": {
    variants: [
      {
        hostname: "kms-fips.us-iso-west-1.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "us-iso-west-1-fips": {
    hostname: "kms-fips.us-iso-west-1.c2s.ic.gov",
    signingRegion: "us-iso-west-1",
  },
  "us-isob-east-1": {
    variants: [
      {
        hostname: "kms-fips.us-isob-east-1.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
  },
  "us-isob-east-1-fips": {
    hostname: "kms-fips.us-isob-east-1.sc2s.sgov.gov",
    signingRegion: "us-isob-east-1",
  },
  "us-west-1": {
    variants: [
      {
        hostname: "kms-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-1-fips": {
    hostname: "kms-fips.us-west-1.amazonaws.com",
    signingRegion: "us-west-1",
  },
  "us-west-2": {
    variants: [
      {
        hostname: "kms-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-2-fips": {
    hostname: "kms-fips.us-west-2.amazonaws.com",
    signingRegion: "us-west-2",
  },
};

const partitionHash: PartitionHash = {
  aws: {
    regions: [
      "af-south-1",
      "af-south-1-fips",
      "ap-east-1",
      "ap-east-1-fips",
      "ap-northeast-1",
      "ap-northeast-1-fips",
      "ap-northeast-2",
      "ap-northeast-2-fips",
      "ap-northeast-3",
      "ap-northeast-3-fips",
      "ap-south-1",
      "ap-south-1-fips",
      "ap-southeast-1",
      "ap-southeast-1-fips",
      "ap-southeast-2",
      "ap-southeast-2-fips",
      "ca-central-1",
      "ca-central-1-fips",
      "eu-central-1",
      "eu-central-1-fips",
      "eu-north-1",
      "eu-north-1-fips",
      "eu-south-1",
      "eu-south-1-fips",
      "eu-west-1",
      "eu-west-1-fips",
      "eu-west-2",
      "eu-west-2-fips",
      "eu-west-3",
      "eu-west-3-fips",
      "me-south-1",
      "me-south-1-fips",
      "sa-east-1",
      "sa-east-1-fips",
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
    hostname: "kms.{region}.amazonaws.com",
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "kms.{region}.amazonaws.com.cn",
  },
  "aws-iso": {
    regions: ["ProdFips", "us-iso-east-1", "us-iso-east-1-fips", "us-iso-west-1", "us-iso-west-1-fips"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "kms.{region}.c2s.ic.gov",
  },
  "aws-iso-b": {
    regions: ["ProdFips", "us-isob-east-1", "us-isob-east-1-fips"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "kms.{region}.sc2s.sgov.gov",
  },
  "aws-us-gov": {
    regions: ["ProdFips", "us-gov-east-1", "us-gov-east-1-fips", "us-gov-west-1", "us-gov-west-1-fips"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "kms.{region}.amazonaws.com",
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (region: string, options?: any) =>
  getRegionInfo(region, {
    ...options,
    signingService: "kms",
    regionHash,
    partitionHash,
  });
