import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "us-east-1": {
    hostname: "servicecatalog.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "servicecatalog.us-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "servicecatalog-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-1-fips": {
    hostname: "servicecatalog-fips.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "servicecatalog-fips.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "us-east-2": {
    hostname: "servicecatalog.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "servicecatalog.us-east-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "servicecatalog-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-2-fips": {
    hostname: "servicecatalog-fips.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "servicecatalog-fips.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-2",
  },
  "us-gov-east-1": {
    hostname: "servicecatalog.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "servicecatalog.us-gov-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "servicecatalog-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-east-1-fips": {
    hostname: "servicecatalog-fips.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "servicecatalog-fips.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "us-gov-west-1": {
    hostname: "servicecatalog.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "servicecatalog.us-gov-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "servicecatalog-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-west-1-fips": {
    hostname: "servicecatalog-fips.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "servicecatalog-fips.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "us-west-1": {
    hostname: "servicecatalog.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "servicecatalog.us-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "servicecatalog-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-1-fips": {
    hostname: "servicecatalog-fips.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "servicecatalog-fips.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-1",
  },
  "us-west-2": {
    hostname: "servicecatalog.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "servicecatalog.us-west-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "servicecatalog-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-2-fips": {
    hostname: "servicecatalog-fips.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "servicecatalog-fips.us-west-2.amazonaws.com",
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
      "us-east-2-fips",
      "us-west-1",
      "us-west-1-fips",
      "us-west-2",
      "us-west-2-fips",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    hostname: "servicecatalog.{region}.amazonaws.com",
    variants: [
      {
        hostname: "servicecatalog.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "servicecatalog-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "servicecatalog-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "servicecatalog.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "servicecatalog.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "servicecatalog.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "servicecatalog-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "servicecatalog-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "servicecatalog.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "servicecatalog.{region}.c2s.ic.gov",
    variants: [
      {
        hostname: "servicecatalog.{region}.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "servicecatalog.{region}.sc2s.sgov.gov",
    variants: [
      {
        hostname: "servicecatalog.{region}.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-east-1-fips", "us-gov-west-1", "us-gov-west-1-fips"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "servicecatalog.{region}.amazonaws.com",
    variants: [
      {
        hostname: "servicecatalog.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "servicecatalog-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "servicecatalog-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "servicecatalog.{region}.api.aws",
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
    signingService: "servicecatalog",
    regionHash,
    partitionHash,
  });
