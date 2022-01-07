import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "af-south-1": {
    variants: [
      {
        hostname: "api.ecr.af-south-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "af-south-1",
  },
  "ap-east-1": {
    variants: [
      {
        hostname: "api.ecr.ap-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-east-1",
  },
  "ap-northeast-1": {
    variants: [
      {
        hostname: "api.ecr.ap-northeast-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-1",
  },
  "ap-northeast-2": {
    variants: [
      {
        hostname: "api.ecr.ap-northeast-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-2",
  },
  "ap-northeast-3": {
    variants: [
      {
        hostname: "api.ecr.ap-northeast-3.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-3",
  },
  "ap-south-1": {
    variants: [
      {
        hostname: "api.ecr.ap-south-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-south-1",
  },
  "ap-southeast-1": {
    variants: [
      {
        hostname: "api.ecr.ap-southeast-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-southeast-1",
  },
  "ap-southeast-2": {
    variants: [
      {
        hostname: "api.ecr.ap-southeast-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-southeast-2",
  },
  "ap-southeast-3": {
    variants: [
      {
        hostname: "api.ecr.ap-southeast-3.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-southeast-3",
  },
  "ca-central-1": {
    variants: [
      {
        hostname: "api.ecr.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ca-central-1",
  },
  "cn-north-1": {
    variants: [
      {
        hostname: "api.ecr.cn-north-1.amazonaws.com.cn",
        tags: [],
      },
    ],
    signingRegion: "cn-north-1",
  },
  "cn-northwest-1": {
    variants: [
      {
        hostname: "api.ecr.cn-northwest-1.amazonaws.com.cn",
        tags: [],
      },
    ],
    signingRegion: "cn-northwest-1",
  },
  "eu-central-1": {
    variants: [
      {
        hostname: "api.ecr.eu-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-central-1",
  },
  "eu-north-1": {
    variants: [
      {
        hostname: "api.ecr.eu-north-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-north-1",
  },
  "eu-south-1": {
    variants: [
      {
        hostname: "api.ecr.eu-south-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-south-1",
  },
  "eu-west-1": {
    variants: [
      {
        hostname: "api.ecr.eu-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-1",
  },
  "eu-west-2": {
    variants: [
      {
        hostname: "api.ecr.eu-west-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-2",
  },
  "eu-west-3": {
    variants: [
      {
        hostname: "api.ecr.eu-west-3.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-3",
  },
  "me-south-1": {
    variants: [
      {
        hostname: "api.ecr.me-south-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "me-south-1",
  },
  "sa-east-1": {
    variants: [
      {
        hostname: "api.ecr.sa-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "sa-east-1",
  },
  "us-east-1": {
    variants: [
      {
        hostname: "api.ecr.us-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "ecr-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-east-1",
  },
  "us-east-2": {
    variants: [
      {
        hostname: "api.ecr.us-east-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "ecr-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-east-2",
  },
  "us-gov-east-1": {
    variants: [
      {
        hostname: "api.ecr.us-gov-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "ecr-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "us-gov-west-1": {
    variants: [
      {
        hostname: "api.ecr.us-gov-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "ecr-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "us-iso-east-1": {
    variants: [
      {
        hostname: "api.ecr.us-iso-east-1.c2s.ic.gov",
        tags: [],
      },
    ],
    signingRegion: "us-iso-east-1",
  },
  "us-iso-west-1": {
    variants: [
      {
        hostname: "api.ecr.us-iso-west-1.c2s.ic.gov",
        tags: [],
      },
    ],
    signingRegion: "us-iso-west-1",
  },
  "us-isob-east-1": {
    variants: [
      {
        hostname: "api.ecr.us-isob-east-1.sc2s.sgov.gov",
        tags: [],
      },
    ],
    signingRegion: "us-isob-east-1",
  },
  "us-west-1": {
    variants: [
      {
        hostname: "api.ecr.us-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "ecr-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-west-1",
  },
  "us-west-2": {
    variants: [
      {
        hostname: "api.ecr.us-west-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "ecr-fips.us-west-2.amazonaws.com",
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
      "dkr-us-east-1",
      "dkr-us-east-2",
      "dkr-us-west-1",
      "dkr-us-west-2",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "fips-dkr-us-east-1",
      "fips-dkr-us-east-2",
      "fips-dkr-us-west-1",
      "fips-dkr-us-west-2",
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
        hostname: "api.ecr.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "ecr-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "api.ecr-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "api.ecr.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "api.ecr.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "api.ecr-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "api.ecr-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "api.ecr.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "api.ecr.{region}.c2s.ic.gov",
        tags: [],
      },
      {
        hostname: "api.ecr-fips.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "api.ecr.{region}.sc2s.sgov.gov",
        tags: [],
      },
      {
        hostname: "api.ecr-fips.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-us-gov": {
    regions: [
      "dkr-us-gov-east-1",
      "dkr-us-gov-west-1",
      "fips-dkr-us-gov-east-1",
      "fips-dkr-us-gov-west-1",
      "fips-us-gov-east-1",
      "fips-us-gov-west-1",
      "us-gov-east-1",
      "us-gov-west-1",
    ],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "api.ecr.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "ecr-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "api.ecr-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "api.ecr.{region}.api.aws",
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
    signingService: "ecr",
    regionHash,
    partitionHash,
  });
