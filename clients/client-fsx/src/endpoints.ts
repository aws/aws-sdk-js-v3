import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "ca-central-1": {
    hostname: "fsx.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx.ca-central-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "fips-ca-central-1": {
    hostname: "fsx-fips.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx-fips.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ca-central-1",
  },
  "fips-prod-ca-central-1": {
    hostname: "fsx-fips.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx-fips.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ca-central-1",
  },
  "fips-prod-us-east-1": {
    hostname: "fsx-fips.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx-fips.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "fips-prod-us-east-2": {
    hostname: "fsx-fips.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "fsx-fips.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-2",
  },
  "fips-prod-us-gov-east-1": {
    hostname: "fsx-fips.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx-fips.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "fips-prod-us-gov-west-1": {
    hostname: "fsx-fips.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx-fips.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "fips-prod-us-west-1": {
    hostname: "fsx-fips.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx-fips.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-1",
  },
  "fips-prod-us-west-2": {
    hostname: "fsx-fips.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "fsx-fips.us-west-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-2",
  },
  "fips-us-east-1": {
    hostname: "fsx-fips.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx-fips.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "fips-us-east-2": {
    hostname: "fsx-fips.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "fsx-fips.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-2",
  },
  "fips-us-gov-east-1": {
    hostname: "fsx-fips.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx-fips.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "fips-us-gov-west-1": {
    hostname: "fsx-fips.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx-fips.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "fips-us-west-1": {
    hostname: "fsx-fips.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx-fips.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-1",
  },
  "fips-us-west-2": {
    hostname: "fsx-fips.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "fsx-fips.us-west-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-2",
  },
  "prod-ca-central-1": {
    hostname: "fsx.prod-ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx.prod-ca-central-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "ca-central-1",
  },
  "prod-us-east-1": {
    hostname: "fsx.prod-us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx.prod-us-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-east-1",
  },
  "prod-us-east-2": {
    hostname: "fsx.prod-us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "fsx.prod-us-east-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-east-2",
  },
  "prod-us-gov-east-1": {
    hostname: "fsx.prod-us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx.prod-us-gov-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "prod-us-gov-west-1": {
    hostname: "fsx.prod-us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx.prod-us-gov-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "prod-us-west-1": {
    hostname: "fsx.prod-us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx.prod-us-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-west-1",
  },
  "prod-us-west-2": {
    hostname: "fsx.prod-us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "fsx.prod-us-west-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-west-2",
  },
  "us-east-1": {
    hostname: "fsx.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx.us-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-2": {
    hostname: "fsx.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "fsx.us-east-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-east-1": {
    hostname: "fsx.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx.us-gov-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-west-1": {
    hostname: "fsx.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx.us-gov-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-1": {
    hostname: "fsx.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "fsx.us-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-2": {
    hostname: "fsx.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "fsx.us-west-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
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
      "fips-ca-central-1",
      "fips-prod-ca-central-1",
      "fips-prod-us-east-1",
      "fips-prod-us-east-2",
      "fips-prod-us-west-1",
      "fips-prod-us-west-2",
      "fips-us-east-1",
      "fips-us-east-2",
      "fips-us-west-1",
      "fips-us-west-2",
      "me-south-1",
      "prod-ca-central-1",
      "prod-us-east-1",
      "prod-us-east-2",
      "prod-us-west-1",
      "prod-us-west-2",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    hostname: "fsx.{region}.amazonaws.com",
    variants: [
      {
        hostname: "fsx.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "fsx-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "fsx.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "fsx.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "fsx.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "fsx-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "fsx-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "fsx.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "fsx.{region}.c2s.ic.gov",
    variants: [
      {
        hostname: "fsx.{region}.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "fsx.{region}.sc2s.sgov.gov",
    variants: [
      {
        hostname: "fsx.{region}.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "aws-us-gov": {
    regions: [
      "fips-prod-us-gov-east-1",
      "fips-prod-us-gov-west-1",
      "fips-us-gov-east-1",
      "fips-us-gov-west-1",
      "prod-us-gov-east-1",
      "prod-us-gov-west-1",
      "us-gov-east-1",
      "us-gov-west-1",
    ],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "fsx.{region}.amazonaws.com",
    variants: [
      {
        hostname: "fsx.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "fsx-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "fsx.{region}.api.aws",
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
    signingService: "fsx",
    regionHash,
    partitionHash,
  });
