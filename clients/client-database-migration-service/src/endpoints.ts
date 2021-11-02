import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  dms: {
    hostname: "dms.dms.amazonaws.com",
    variants: [
      {
        hostname: "dms.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "dms.dms.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "dms-fips": {
    hostname: "dms.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "dms.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "us-east-1": {
    hostname: "dms.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "dms-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "dms.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-east-1-fips": {
    hostname: "dms-fips.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "dms-fips.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "us-east-2": {
    hostname: "dms.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "dms-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "dms.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-east-2-fips": {
    hostname: "dms-fips.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "dms-fips.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-2",
  },
  "us-gov-east-1": {
    hostname: "dms.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "dms.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "dms.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-gov-east-1-fips": {
    hostname: "dms.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "dms.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "us-gov-west-1": {
    hostname: "dms.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "dms.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "dms.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-gov-west-1-fips": {
    hostname: "dms.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "dms.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "us-iso-east-1": {
    hostname: "dms.us-iso-east-1.c2s.ic.gov",
    variants: [
      {
        hostname: "dms.us-iso-east-1.c2s.ic.gov",
        tags: ["fips"],
      },
      {
        hostname: "dms.us-iso-east-1.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "us-iso-east-1-fips": {
    hostname: "dms.us-iso-east-1.c2s.ic.gov",
    variants: [
      {
        hostname: "dms.us-iso-east-1.c2s.ic.gov",
        tags: [],
      },
    ],
    signingRegion: "us-iso-east-1",
  },
  "us-isob-east-1": {
    hostname: "dms.us-isob-east-1.sc2s.sgov.gov",
    variants: [
      {
        hostname: "dms.us-isob-east-1.sc2s.sgov.gov",
        tags: ["fips"],
      },
      {
        hostname: "dms.us-isob-east-1.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "us-isob-east-1-fips": {
    hostname: "dms.us-isob-east-1.sc2s.sgov.gov",
    variants: [
      {
        hostname: "dms.us-isob-east-1.sc2s.sgov.gov",
        tags: [],
      },
    ],
    signingRegion: "us-isob-east-1",
  },
  "us-west-1": {
    hostname: "dms.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "dms-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "dms.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-west-1-fips": {
    hostname: "dms-fips.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "dms-fips.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-1",
  },
  "us-west-2": {
    hostname: "dms.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "dms-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "dms.us-west-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-west-2-fips": {
    hostname: "dms-fips.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "dms-fips.us-west-2.amazonaws.com",
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
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "dms",
      "dms-fips",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
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
    hostname: "dms.{region}.amazonaws.com",
    variants: [
      {
        hostname: "dms-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "dms-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "dms.{region}.api.aws",
        tags: ["dualstack"],
      },
      {
        hostname: "dms.{region}.amazonaws.com",
        tags: [],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "dms.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "dms-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "dms-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "dms.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
      {
        hostname: "dms.{region}.amazonaws.com.cn",
        tags: [],
      },
    ],
  },
  "aws-iso": {
    regions: ["dms", "dms-fips", "us-iso-east-1", "us-iso-east-1-fips", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "dms.{region}.c2s.ic.gov",
    variants: [
      {
        hostname: "dms.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
      {
        hostname: "dms.{region}.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["dms", "dms-fips", "us-isob-east-1", "us-isob-east-1-fips"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "dms.{region}.sc2s.sgov.gov",
    variants: [
      {
        hostname: "dms.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
      {
        hostname: "dms.{region}.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["dms", "dms-fips", "us-gov-east-1", "us-gov-east-1-fips", "us-gov-west-1", "us-gov-west-1-fips"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "dms.{region}.amazonaws.com",
    variants: [
      {
        hostname: "dms.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "dms.{region}.amazonaws.com",
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
    signingService: "dms",
    regionHash,
    partitionHash,
  });
