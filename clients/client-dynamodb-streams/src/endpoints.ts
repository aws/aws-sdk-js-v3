import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "ca-central-1-fips": {
    hostname: "dynamodb-fips.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "dynamodb-fips.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ca-central-1",
  },
  local: {
    hostname: "localhost:8000",
    variants: [
      {
        hostname: "localhost:8000",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "us-east-1-fips": {
    hostname: "dynamodb-fips.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "dynamodb-fips.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "us-east-2-fips": {
    hostname: "dynamodb-fips.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "dynamodb-fips.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-2",
  },
  "us-gov-east-1": {
    hostname: "streams.dynamodb.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "dynamodb.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "streams.dynamodb.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-gov-east-1-fips": {
    hostname: "dynamodb.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "dynamodb.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "us-gov-west-1": {
    hostname: "streams.dynamodb.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "dynamodb.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "streams.dynamodb.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-gov-west-1-fips": {
    hostname: "dynamodb.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "dynamodb.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "us-west-1-fips": {
    hostname: "dynamodb-fips.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "dynamodb-fips.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-1",
  },
  "us-west-2-fips": {
    hostname: "dynamodb-fips.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "dynamodb-fips.us-west-2.amazonaws.com",
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
      "local",
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
    hostname: "streams.dynamodb.{region}.amazonaws.com",
    variants: [
      {
        hostname: "dynamodb-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "streams.dynamodb.{region}.amazonaws.com",
        tags: [],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "streams.dynamodb.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "streams.dynamodb-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "streams.dynamodb-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "streams.dynamodb.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
      {
        hostname: "streams.dynamodb.{region}.amazonaws.com.cn",
        tags: [],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "streams.dynamodb.{region}.c2s.ic.gov",
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "streams.dynamodb.{region}.sc2s.sgov.gov",
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-east-1-fips", "us-gov-west-1", "us-gov-west-1-fips"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "streams.dynamodb.{region}.amazonaws.com",
    variants: [
      {
        hostname: "dynamodb.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "streams.dynamodb.{region}.amazonaws.com",
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
    signingService: "dynamodb",
    regionHash,
    partitionHash,
  });
