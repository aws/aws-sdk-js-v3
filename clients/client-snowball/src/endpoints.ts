import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "ap-northeast-1": {
    hostname: "snowball.ap-northeast-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.ap-northeast-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.ap-northeast-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-northeast-2": {
    hostname: "snowball.ap-northeast-2.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.ap-northeast-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.ap-northeast-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-northeast-3": {
    hostname: "snowball.ap-northeast-3.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.ap-northeast-3.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.ap-northeast-3.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-south-1": {
    hostname: "snowball.ap-south-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.ap-south-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.ap-south-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-southeast-1": {
    hostname: "snowball.ap-southeast-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.ap-southeast-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.ap-southeast-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-southeast-2": {
    hostname: "snowball.ap-southeast-2.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.ap-southeast-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.ap-southeast-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ca-central-1": {
    hostname: "snowball.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "cn-north-1": {
    hostname: "snowball.cn-north-1.amazonaws.com.cn",
    variants: [
      {
        hostname: "snowball-fips.cn-north-1.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "snowball.cn-north-1.amazonaws.com.cn",
        tags: [],
      },
    ],
  },
  "cn-northwest-1": {
    hostname: "snowball.cn-northwest-1.amazonaws.com.cn",
    variants: [
      {
        hostname: "snowball-fips.cn-northwest-1.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "snowball.cn-northwest-1.amazonaws.com.cn",
        tags: [],
      },
    ],
  },
  "eu-central-1": {
    hostname: "snowball.eu-central-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.eu-central-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.eu-central-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-west-1": {
    hostname: "snowball.eu-west-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.eu-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.eu-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-west-2": {
    hostname: "snowball.eu-west-2.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.eu-west-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.eu-west-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-west-3": {
    hostname: "snowball.eu-west-3.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.eu-west-3.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.eu-west-3.amazonaws.com",
        tags: [],
      },
    ],
  },
  "fips-ap-northeast-1": {
    hostname: "snowball-fips.ap-northeast-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.ap-northeast-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-1",
  },
  "fips-ap-northeast-2": {
    hostname: "snowball-fips.ap-northeast-2.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.ap-northeast-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-2",
  },
  "fips-ap-northeast-3": {
    hostname: "snowball-fips.ap-northeast-3.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.ap-northeast-3.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-3",
  },
  "fips-ap-south-1": {
    hostname: "snowball-fips.ap-south-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.ap-south-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-south-1",
  },
  "fips-ap-southeast-1": {
    hostname: "snowball-fips.ap-southeast-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.ap-southeast-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-southeast-1",
  },
  "fips-ap-southeast-2": {
    hostname: "snowball-fips.ap-southeast-2.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.ap-southeast-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-southeast-2",
  },
  "fips-ca-central-1": {
    hostname: "snowball-fips.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ca-central-1",
  },
  "fips-cn-north-1": {
    hostname: "snowball-fips.cn-north-1.amazonaws.com.cn",
    variants: [
      {
        hostname: "snowball-fips.cn-north-1.amazonaws.com.cn",
        tags: [],
      },
    ],
    signingRegion: "cn-north-1",
  },
  "fips-cn-northwest-1": {
    hostname: "snowball-fips.cn-northwest-1.amazonaws.com.cn",
    variants: [
      {
        hostname: "snowball-fips.cn-northwest-1.amazonaws.com.cn",
        tags: [],
      },
    ],
    signingRegion: "cn-northwest-1",
  },
  "fips-eu-central-1": {
    hostname: "snowball-fips.eu-central-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.eu-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-central-1",
  },
  "fips-eu-west-1": {
    hostname: "snowball-fips.eu-west-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.eu-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-1",
  },
  "fips-eu-west-2": {
    hostname: "snowball-fips.eu-west-2.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.eu-west-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-2",
  },
  "fips-eu-west-3": {
    hostname: "snowball-fips.eu-west-3.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.eu-west-3.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-3",
  },
  "fips-sa-east-1": {
    hostname: "snowball-fips.sa-east-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.sa-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "sa-east-1",
  },
  "fips-us-east-1": {
    hostname: "snowball-fips.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "fips-us-east-2": {
    hostname: "snowball-fips.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-2",
  },
  "fips-us-gov-east-1": {
    hostname: "snowball-fips.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "fips-us-gov-west-1": {
    hostname: "snowball-fips.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "fips-us-west-1": {
    hostname: "snowball-fips.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-1",
  },
  "fips-us-west-2": {
    hostname: "snowball-fips.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.us-west-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-2",
  },
  "sa-east-1": {
    hostname: "snowball.sa-east-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.sa-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.sa-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-east-1": {
    hostname: "snowball.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-east-2": {
    hostname: "snowball.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-gov-east-1": {
    hostname: "snowball.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-gov-west-1": {
    hostname: "snowball.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-west-1": {
    hostname: "snowball.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-west-2": {
    hostname: "snowball.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "snowball-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "snowball.us-west-2.amazonaws.com",
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
    hostname: "snowball.{region}.amazonaws.com",
    variants: [
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
      {
        hostname: "snowball.{region}.amazonaws.com",
        tags: [],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1", "fips-cn-north-1", "fips-cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "snowball.{region}.amazonaws.com.cn",
    variants: [
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
      {
        hostname: "snowball.{region}.amazonaws.com.cn",
        tags: [],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "snowball.{region}.c2s.ic.gov",
    variants: [
      {
        hostname: "snowball.{region}.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "snowball.{region}.sc2s.sgov.gov",
    variants: [
      {
        hostname: "snowball.{region}.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["fips-us-gov-east-1", "fips-us-gov-west-1", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "snowball.{region}.amazonaws.com",
    variants: [
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
      {
        hostname: "snowball.{region}.amazonaws.com",
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
    signingService: "snowball",
    regionHash,
    partitionHash,
  });
