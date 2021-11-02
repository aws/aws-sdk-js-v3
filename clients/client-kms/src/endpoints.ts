import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  ProdFips: {
    hostname: "kms-fips.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "af-south-1": {
    hostname: "kms.af-south-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.af-south-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.af-south-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "af-south-1-fips": {
    hostname: "kms-fips.af-south-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.af-south-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "af-south-1",
  },
  "ap-east-1": {
    hostname: "kms.ap-east-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.ap-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.ap-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-east-1-fips": {
    hostname: "kms-fips.ap-east-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.ap-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-east-1",
  },
  "ap-northeast-1": {
    hostname: "kms.ap-northeast-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.ap-northeast-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.ap-northeast-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-northeast-1-fips": {
    hostname: "kms-fips.ap-northeast-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.ap-northeast-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-1",
  },
  "ap-northeast-2": {
    hostname: "kms.ap-northeast-2.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.ap-northeast-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.ap-northeast-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-northeast-2-fips": {
    hostname: "kms-fips.ap-northeast-2.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.ap-northeast-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-2",
  },
  "ap-northeast-3": {
    hostname: "kms.ap-northeast-3.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.ap-northeast-3.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.ap-northeast-3.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-northeast-3-fips": {
    hostname: "kms-fips.ap-northeast-3.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.ap-northeast-3.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-3",
  },
  "ap-south-1": {
    hostname: "kms.ap-south-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.ap-south-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.ap-south-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-south-1-fips": {
    hostname: "kms-fips.ap-south-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.ap-south-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-south-1",
  },
  "ap-southeast-1": {
    hostname: "kms.ap-southeast-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.ap-southeast-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.ap-southeast-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-southeast-1-fips": {
    hostname: "kms-fips.ap-southeast-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.ap-southeast-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-southeast-1",
  },
  "ap-southeast-2": {
    hostname: "kms.ap-southeast-2.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.ap-southeast-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.ap-southeast-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-southeast-2-fips": {
    hostname: "kms-fips.ap-southeast-2.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.ap-southeast-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-southeast-2",
  },
  "ca-central-1": {
    hostname: "kms.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ca-central-1-fips": {
    hostname: "kms-fips.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ca-central-1",
  },
  "eu-central-1": {
    hostname: "kms.eu-central-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.eu-central-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.eu-central-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-central-1-fips": {
    hostname: "kms-fips.eu-central-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.eu-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-central-1",
  },
  "eu-north-1": {
    hostname: "kms.eu-north-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.eu-north-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.eu-north-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-north-1-fips": {
    hostname: "kms-fips.eu-north-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.eu-north-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-north-1",
  },
  "eu-south-1": {
    hostname: "kms.eu-south-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.eu-south-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.eu-south-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-south-1-fips": {
    hostname: "kms-fips.eu-south-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.eu-south-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-south-1",
  },
  "eu-west-1": {
    hostname: "kms.eu-west-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.eu-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.eu-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-west-1-fips": {
    hostname: "kms-fips.eu-west-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.eu-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-1",
  },
  "eu-west-2": {
    hostname: "kms.eu-west-2.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.eu-west-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.eu-west-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-west-2-fips": {
    hostname: "kms-fips.eu-west-2.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.eu-west-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-2",
  },
  "eu-west-3": {
    hostname: "kms.eu-west-3.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.eu-west-3.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.eu-west-3.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-west-3-fips": {
    hostname: "kms-fips.eu-west-3.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.eu-west-3.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-3",
  },
  "me-south-1": {
    hostname: "kms.me-south-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.me-south-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.me-south-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "me-south-1-fips": {
    hostname: "kms-fips.me-south-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.me-south-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "me-south-1",
  },
  "sa-east-1": {
    hostname: "kms.sa-east-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.sa-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.sa-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "sa-east-1-fips": {
    hostname: "kms-fips.sa-east-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.sa-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "sa-east-1",
  },
  "us-east-1": {
    hostname: "kms.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-east-1-fips": {
    hostname: "kms-fips.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "us-east-2": {
    hostname: "kms.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-east-2-fips": {
    hostname: "kms-fips.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-2",
  },
  "us-gov-east-1": {
    hostname: "kms.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-gov-east-1-fips": {
    hostname: "kms-fips.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "us-gov-west-1": {
    hostname: "kms.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-gov-west-1-fips": {
    hostname: "kms-fips.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "us-iso-east-1": {
    hostname: "kms.us-iso-east-1.c2s.ic.gov",
    variants: [
      {
        hostname: "kms-fips.us-iso-east-1.c2s.ic.gov",
        tags: ["fips"],
      },
      {
        hostname: "kms.us-iso-east-1.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "us-iso-east-1-fips": {
    hostname: "kms-fips.us-iso-east-1.c2s.ic.gov",
    variants: [
      {
        hostname: "kms-fips.us-iso-east-1.c2s.ic.gov",
        tags: [],
      },
    ],
    signingRegion: "us-iso-east-1",
  },
  "us-iso-west-1": {
    hostname: "kms.us-iso-west-1.c2s.ic.gov",
    variants: [
      {
        hostname: "kms-fips.us-iso-west-1.c2s.ic.gov",
        tags: ["fips"],
      },
      {
        hostname: "kms.us-iso-west-1.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "us-iso-west-1-fips": {
    hostname: "kms-fips.us-iso-west-1.c2s.ic.gov",
    variants: [
      {
        hostname: "kms-fips.us-iso-west-1.c2s.ic.gov",
        tags: [],
      },
    ],
    signingRegion: "us-iso-west-1",
  },
  "us-isob-east-1": {
    hostname: "kms.us-isob-east-1.sc2s.sgov.gov",
    variants: [
      {
        hostname: "kms-fips.us-isob-east-1.sc2s.sgov.gov",
        tags: ["fips"],
      },
      {
        hostname: "kms.us-isob-east-1.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "us-isob-east-1-fips": {
    hostname: "kms-fips.us-isob-east-1.sc2s.sgov.gov",
    variants: [
      {
        hostname: "kms-fips.us-isob-east-1.sc2s.sgov.gov",
        tags: [],
      },
    ],
    signingRegion: "us-isob-east-1",
  },
  "us-west-1": {
    hostname: "kms.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-west-1-fips": {
    hostname: "kms-fips.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-1",
  },
  "us-west-2": {
    hostname: "kms.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms.us-west-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-west-2-fips": {
    hostname: "kms-fips.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.us-west-2.amazonaws.com",
        tags: [],
      },
    ],
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
    variants: [
      {
        hostname: "kms-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "kms.{region}.api.aws",
        tags: ["dualstack"],
      },
      {
        hostname: "kms.{region}.amazonaws.com",
        tags: [],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "kms.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "kms-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "kms-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "kms.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
      {
        hostname: "kms.{region}.amazonaws.com.cn",
        tags: [],
      },
    ],
  },
  "aws-iso": {
    regions: ["ProdFips", "us-iso-east-1", "us-iso-east-1-fips", "us-iso-west-1", "us-iso-west-1-fips"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "kms.{region}.c2s.ic.gov",
    variants: [
      {
        hostname: "kms.{region}.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["ProdFips", "us-isob-east-1", "us-isob-east-1-fips"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "kms.{region}.sc2s.sgov.gov",
    variants: [
      {
        hostname: "kms.{region}.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["ProdFips", "us-gov-east-1", "us-gov-east-1-fips", "us-gov-west-1", "us-gov-west-1-fips"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "kms.{region}.amazonaws.com",
    variants: [
      {
        hostname: "kms-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "kms-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "kms.{region}.api.aws",
        tags: ["dualstack"],
      },
      {
        hostname: "kms.{region}.amazonaws.com",
        tags: [],
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
    signingService: "kms",
    regionHash,
    partitionHash,
  });
