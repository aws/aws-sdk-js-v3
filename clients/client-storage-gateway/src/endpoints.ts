import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "ca-central-1": {
    hostname: "storagegateway.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "storagegateway.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ca-central-1-fips": {
    hostname: "storagegateway-fips.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ca-central-1",
  },
  fips: {
    hostname: "storagegateway-fips.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "us-east-1": {
    hostname: "storagegateway.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "storagegateway.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-east-1-fips": {
    hostname: "storagegateway-fips.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "us-east-2": {
    hostname: "storagegateway.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "storagegateway.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-east-2-fips": {
    hostname: "storagegateway-fips.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-2",
  },
  "us-gov-east-1": {
    hostname: "storagegateway.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "storagegateway.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-gov-east-1-fips": {
    hostname: "storagegateway-fips.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "us-gov-west-1": {
    hostname: "storagegateway.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "storagegateway.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-gov-west-1-fips": {
    hostname: "storagegateway-fips.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "us-west-1": {
    hostname: "storagegateway.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "storagegateway.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-west-1-fips": {
    hostname: "storagegateway-fips.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-1",
  },
  "us-west-2": {
    hostname: "storagegateway.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "storagegateway.us-west-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-west-2-fips": {
    hostname: "storagegateway-fips.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.us-west-2.amazonaws.com",
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
      "ca-central-1-fips",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "fips",
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
    hostname: "storagegateway.{region}.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "storagegateway-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "storagegateway.{region}.api.aws",
        tags: ["dualstack"],
      },
      {
        hostname: "storagegateway.{region}.amazonaws.com",
        tags: [],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "storagegateway.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "storagegateway-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "storagegateway-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "storagegateway.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
      {
        hostname: "storagegateway.{region}.amazonaws.com.cn",
        tags: [],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "storagegateway.{region}.c2s.ic.gov",
    variants: [
      {
        hostname: "storagegateway.{region}.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "storagegateway.{region}.sc2s.sgov.gov",
    variants: [
      {
        hostname: "storagegateway.{region}.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["fips", "us-gov-east-1", "us-gov-east-1-fips", "us-gov-west-1", "us-gov-west-1-fips"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "storagegateway.{region}.amazonaws.com",
    variants: [
      {
        hostname: "storagegateway-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "storagegateway-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "storagegateway.{region}.api.aws",
        tags: ["dualstack"],
      },
      {
        hostname: "storagegateway.{region}.amazonaws.com",
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
    signingService: "storagegateway",
    regionHash,
    partitionHash,
  });
