import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "ap-northeast-1": {
    hostname: "api.elastic-inference.ap-northeast-1.amazonaws.com",
    variants: [
      {
        hostname: "api.elastic-inference.ap-northeast-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-northeast-2": {
    hostname: "api.elastic-inference.ap-northeast-2.amazonaws.com",
    variants: [
      {
        hostname: "api.elastic-inference.ap-northeast-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-west-1": {
    hostname: "api.elastic-inference.eu-west-1.amazonaws.com",
    variants: [
      {
        hostname: "api.elastic-inference.eu-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-east-1": {
    hostname: "api.elastic-inference.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "api.elastic-inference.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-east-2": {
    hostname: "api.elastic-inference.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "api.elastic-inference.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-west-2": {
    hostname: "api.elastic-inference.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "api.elastic-inference.us-west-2.amazonaws.com",
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
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    hostname: "api.elastic-inference.{region}.amazonaws.com",
    variants: [
      {
        hostname: "api.elastic-inference-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "api.elastic-inference-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "api.elastic-inference.{region}.api.aws",
        tags: ["dualstack"],
      },
      {
        hostname: "api.elastic-inference.{region}.amazonaws.com",
        tags: [],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "api.elastic-inference.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "api.elastic-inference-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "api.elastic-inference-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "api.elastic-inference.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
      {
        hostname: "api.elastic-inference.{region}.amazonaws.com.cn",
        tags: [],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "api.elastic-inference.{region}.c2s.ic.gov",
    variants: [
      {
        hostname: "api.elastic-inference.{region}.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "api.elastic-inference.{region}.sc2s.sgov.gov",
    variants: [
      {
        hostname: "api.elastic-inference.{region}.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "api.elastic-inference.{region}.amazonaws.com",
    variants: [
      {
        hostname: "api.elastic-inference-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "api.elastic-inference-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "api.elastic-inference.{region}.api.aws",
        tags: ["dualstack"],
      },
      {
        hostname: "api.elastic-inference.{region}.amazonaws.com",
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
    signingService: "elastic-inference",
    regionHash,
    partitionHash,
  });
