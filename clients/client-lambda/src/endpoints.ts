// smithy-typescript generated code
import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "af-south-1": {
    variants: [
      {
        hostname: "lambda.af-south-1.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "ap-east-1": {
    variants: [
      {
        hostname: "lambda.ap-east-1.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "ap-northeast-1": {
    variants: [
      {
        hostname: "lambda.ap-northeast-1.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "ap-northeast-2": {
    variants: [
      {
        hostname: "lambda.ap-northeast-2.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "ap-northeast-3": {
    variants: [
      {
        hostname: "lambda.ap-northeast-3.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "ap-south-1": {
    variants: [
      {
        hostname: "lambda.ap-south-1.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "ap-southeast-1": {
    variants: [
      {
        hostname: "lambda.ap-southeast-1.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "ap-southeast-2": {
    variants: [
      {
        hostname: "lambda.ap-southeast-2.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "ap-southeast-3": {
    variants: [
      {
        hostname: "lambda.ap-southeast-3.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "ca-central-1": {
    variants: [
      {
        hostname: "lambda.ca-central-1.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "cn-north-1": {
    variants: [
      {
        hostname: "lambda.cn-north-1.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "cn-northwest-1": {
    variants: [
      {
        hostname: "lambda.cn-northwest-1.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "eu-central-1": {
    variants: [
      {
        hostname: "lambda.eu-central-1.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "eu-north-1": {
    variants: [
      {
        hostname: "lambda.eu-north-1.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "eu-south-1": {
    variants: [
      {
        hostname: "lambda.eu-south-1.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "eu-west-1": {
    variants: [
      {
        hostname: "lambda.eu-west-1.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "eu-west-2": {
    variants: [
      {
        hostname: "lambda.eu-west-2.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "eu-west-3": {
    variants: [
      {
        hostname: "lambda.eu-west-3.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "me-south-1": {
    variants: [
      {
        hostname: "lambda.me-south-1.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "sa-east-1": {
    variants: [
      {
        hostname: "lambda.sa-east-1.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "us-east-1": {
    variants: [
      {
        hostname: "lambda-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "lambda.us-east-1.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "us-east-2": {
    variants: [
      {
        hostname: "lambda-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "lambda.us-east-2.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "us-gov-east-1": {
    variants: [
      {
        hostname: "lambda-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "lambda.us-gov-east-1.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "us-gov-west-1": {
    variants: [
      {
        hostname: "lambda-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "lambda.us-gov-west-1.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "us-west-1": {
    variants: [
      {
        hostname: "lambda-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "lambda.us-west-1.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "us-west-2": {
    variants: [
      {
        hostname: "lambda-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "lambda.us-west-2.api.aws",
        tags: ["dualstack"],
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
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
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
        hostname: "lambda.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "lambda-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "lambda-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "lambda.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "lambda.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "lambda-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "lambda-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "lambda.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "lambda.{region}.c2s.ic.gov",
        tags: [],
      },
      {
        hostname: "lambda-fips.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "lambda.{region}.sc2s.sgov.gov",
        tags: [],
      },
      {
        hostname: "lambda-fips.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["fips-us-gov-east-1", "fips-us-gov-west-1", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "lambda.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "lambda-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "lambda-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "lambda.{region}.api.aws",
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
    signingService: "lambda",
    regionHash,
    partitionHash,
  });
