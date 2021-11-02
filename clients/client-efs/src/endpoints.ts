import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "af-south-1": {
    hostname: "elasticfilesystem.af-south-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.af-south-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.af-south-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-east-1": {
    hostname: "elasticfilesystem.ap-east-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.ap-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.ap-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-northeast-1": {
    hostname: "elasticfilesystem.ap-northeast-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.ap-northeast-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.ap-northeast-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-northeast-2": {
    hostname: "elasticfilesystem.ap-northeast-2.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.ap-northeast-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.ap-northeast-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-northeast-3": {
    hostname: "elasticfilesystem.ap-northeast-3.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.ap-northeast-3.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.ap-northeast-3.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-south-1": {
    hostname: "elasticfilesystem.ap-south-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.ap-south-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.ap-south-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-southeast-1": {
    hostname: "elasticfilesystem.ap-southeast-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.ap-southeast-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.ap-southeast-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-southeast-2": {
    hostname: "elasticfilesystem.ap-southeast-2.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.ap-southeast-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.ap-southeast-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ca-central-1": {
    hostname: "elasticfilesystem.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "cn-north-1": {
    hostname: "elasticfilesystem.cn-north-1.amazonaws.com.cn",
    variants: [
      {
        hostname: "elasticfilesystem-fips.cn-north-1.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.cn-north-1.amazonaws.com.cn",
        tags: [],
      },
    ],
  },
  "cn-northwest-1": {
    hostname: "elasticfilesystem.cn-northwest-1.amazonaws.com.cn",
    variants: [
      {
        hostname: "elasticfilesystem-fips.cn-northwest-1.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.cn-northwest-1.amazonaws.com.cn",
        tags: [],
      },
    ],
  },
  "eu-central-1": {
    hostname: "elasticfilesystem.eu-central-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.eu-central-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.eu-central-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-north-1": {
    hostname: "elasticfilesystem.eu-north-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.eu-north-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.eu-north-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-south-1": {
    hostname: "elasticfilesystem.eu-south-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.eu-south-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.eu-south-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-west-1": {
    hostname: "elasticfilesystem.eu-west-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.eu-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.eu-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-west-2": {
    hostname: "elasticfilesystem.eu-west-2.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.eu-west-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.eu-west-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-west-3": {
    hostname: "elasticfilesystem.eu-west-3.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.eu-west-3.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.eu-west-3.amazonaws.com",
        tags: [],
      },
    ],
  },
  "fips-af-south-1": {
    hostname: "elasticfilesystem-fips.af-south-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.af-south-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "af-south-1",
  },
  "fips-ap-east-1": {
    hostname: "elasticfilesystem-fips.ap-east-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.ap-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-east-1",
  },
  "fips-ap-northeast-1": {
    hostname: "elasticfilesystem-fips.ap-northeast-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.ap-northeast-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-1",
  },
  "fips-ap-northeast-2": {
    hostname: "elasticfilesystem-fips.ap-northeast-2.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.ap-northeast-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-2",
  },
  "fips-ap-northeast-3": {
    hostname: "elasticfilesystem-fips.ap-northeast-3.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.ap-northeast-3.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-3",
  },
  "fips-ap-south-1": {
    hostname: "elasticfilesystem-fips.ap-south-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.ap-south-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-south-1",
  },
  "fips-ap-southeast-1": {
    hostname: "elasticfilesystem-fips.ap-southeast-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.ap-southeast-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-southeast-1",
  },
  "fips-ap-southeast-2": {
    hostname: "elasticfilesystem-fips.ap-southeast-2.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.ap-southeast-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-southeast-2",
  },
  "fips-ca-central-1": {
    hostname: "elasticfilesystem-fips.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ca-central-1",
  },
  "fips-cn-north-1": {
    hostname: "elasticfilesystem-fips.cn-north-1.amazonaws.com.cn",
    variants: [
      {
        hostname: "elasticfilesystem-fips.cn-north-1.amazonaws.com.cn",
        tags: [],
      },
    ],
    signingRegion: "cn-north-1",
  },
  "fips-cn-northwest-1": {
    hostname: "elasticfilesystem-fips.cn-northwest-1.amazonaws.com.cn",
    variants: [
      {
        hostname: "elasticfilesystem-fips.cn-northwest-1.amazonaws.com.cn",
        tags: [],
      },
    ],
    signingRegion: "cn-northwest-1",
  },
  "fips-eu-central-1": {
    hostname: "elasticfilesystem-fips.eu-central-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.eu-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-central-1",
  },
  "fips-eu-north-1": {
    hostname: "elasticfilesystem-fips.eu-north-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.eu-north-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-north-1",
  },
  "fips-eu-south-1": {
    hostname: "elasticfilesystem-fips.eu-south-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.eu-south-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-south-1",
  },
  "fips-eu-west-1": {
    hostname: "elasticfilesystem-fips.eu-west-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.eu-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-1",
  },
  "fips-eu-west-2": {
    hostname: "elasticfilesystem-fips.eu-west-2.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.eu-west-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-2",
  },
  "fips-eu-west-3": {
    hostname: "elasticfilesystem-fips.eu-west-3.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.eu-west-3.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-3",
  },
  "fips-me-south-1": {
    hostname: "elasticfilesystem-fips.me-south-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.me-south-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "me-south-1",
  },
  "fips-sa-east-1": {
    hostname: "elasticfilesystem-fips.sa-east-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.sa-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "sa-east-1",
  },
  "fips-us-east-1": {
    hostname: "elasticfilesystem-fips.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "fips-us-east-2": {
    hostname: "elasticfilesystem-fips.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-2",
  },
  "fips-us-gov-east-1": {
    hostname: "elasticfilesystem-fips.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "fips-us-gov-west-1": {
    hostname: "elasticfilesystem-fips.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "fips-us-iso-east-1": {
    hostname: "elasticfilesystem-fips.us-iso-east-1.c2s.ic.gov",
    variants: [
      {
        hostname: "elasticfilesystem-fips.us-iso-east-1.c2s.ic.gov",
        tags: [],
      },
    ],
    signingRegion: "us-iso-east-1",
  },
  "fips-us-west-1": {
    hostname: "elasticfilesystem-fips.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-1",
  },
  "fips-us-west-2": {
    hostname: "elasticfilesystem-fips.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.us-west-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-2",
  },
  "me-south-1": {
    hostname: "elasticfilesystem.me-south-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.me-south-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.me-south-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "sa-east-1": {
    hostname: "elasticfilesystem.sa-east-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.sa-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.sa-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-east-1": {
    hostname: "elasticfilesystem.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-east-2": {
    hostname: "elasticfilesystem.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-gov-east-1": {
    hostname: "elasticfilesystem.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-gov-west-1": {
    hostname: "elasticfilesystem.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-iso-east-1": {
    hostname: "elasticfilesystem.us-iso-east-1.c2s.ic.gov",
    variants: [
      {
        hostname: "elasticfilesystem-fips.us-iso-east-1.c2s.ic.gov",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.us-iso-east-1.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "us-west-1": {
    hostname: "elasticfilesystem.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-west-2": {
    hostname: "elasticfilesystem.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem.us-west-2.amazonaws.com",
        tags: [],
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
      "fips-af-south-1",
      "fips-ap-east-1",
      "fips-ap-northeast-1",
      "fips-ap-northeast-2",
      "fips-ap-northeast-3",
      "fips-ap-south-1",
      "fips-ap-southeast-1",
      "fips-ap-southeast-2",
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
    hostname: "elasticfilesystem.{region}.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "elasticfilesystem.{region}.api.aws",
        tags: ["dualstack"],
      },
      {
        hostname: "elasticfilesystem.{region}.amazonaws.com",
        tags: [],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1", "fips-cn-north-1", "fips-cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "elasticfilesystem.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "elasticfilesystem-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "elasticfilesystem.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
      {
        hostname: "elasticfilesystem.{region}.amazonaws.com.cn",
        tags: [],
      },
    ],
  },
  "aws-iso": {
    regions: ["fips-us-iso-east-1", "us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "elasticfilesystem.{region}.c2s.ic.gov",
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "elasticfilesystem.{region}.sc2s.sgov.gov",
  },
  "aws-us-gov": {
    regions: ["fips-us-gov-east-1", "fips-us-gov-west-1", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "elasticfilesystem.{region}.amazonaws.com",
    variants: [
      {
        hostname: "elasticfilesystem-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "elasticfilesystem-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "elasticfilesystem.{region}.api.aws",
        tags: ["dualstack"],
      },
      {
        hostname: "elasticfilesystem.{region}.amazonaws.com",
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
    signingService: "elasticfilesystem",
    regionHash,
    partitionHash,
  });
