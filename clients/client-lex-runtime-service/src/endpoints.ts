import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "us-east-1": {
    hostname: "runtime.lex.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "runtime.lex.us-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "runtime-fips.lex.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-1-fips": {
    hostname: "runtime-fips.lex.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "runtime-fips.lex.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "us-gov-west-1": {
    hostname: "runtime.lex.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "runtime.lex.us-gov-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "runtime-fips.lex.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-west-1-fips": {
    hostname: "runtime-fips.lex.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "runtime-fips.lex.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "us-west-2": {
    hostname: "runtime.lex.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "runtime.lex.us-west-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "runtime-fips.lex.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-2-fips": {
    hostname: "runtime-fips.lex.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "runtime-fips.lex.us-west-2.amazonaws.com",
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
      "us-west-1",
      "us-west-2",
      "us-west-2-fips",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    hostname: "runtime.lex.{region}.amazonaws.com",
    variants: [
      {
        hostname: "runtime.lex.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "runtime-fips.lex.{region}.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "runtime.lex.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "runtime.lex.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "runtime.lex-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "runtime.lex-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "runtime.lex.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "runtime.lex.{region}.c2s.ic.gov",
    variants: [
      {
        hostname: "runtime.lex.{region}.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "runtime.lex.{region}.sc2s.sgov.gov",
    variants: [
      {
        hostname: "runtime.lex.{region}.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-west-1", "us-gov-west-1-fips"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "runtime.lex.{region}.amazonaws.com",
    variants: [
      {
        hostname: "runtime.lex.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "runtime-fips.lex.{region}.amazonaws.com",
        tags: ["fips"],
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
    signingService: "lex",
    regionHash,
    partitionHash,
  });
