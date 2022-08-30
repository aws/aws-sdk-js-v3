// smithy-typescript generated code
import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "ap-northeast-1": {
    variants: [
      {
        hostname: "s3-control.ap-northeast-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control.dualstack.ap-northeast-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "ap-northeast-1",
  },
  "ap-northeast-2": {
    variants: [
      {
        hostname: "s3-control.ap-northeast-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control.dualstack.ap-northeast-2.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "ap-northeast-2",
  },
  "ap-northeast-3": {
    variants: [
      {
        hostname: "s3-control.ap-northeast-3.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control.dualstack.ap-northeast-3.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "ap-northeast-3",
  },
  "ap-south-1": {
    variants: [
      {
        hostname: "s3-control.ap-south-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control.dualstack.ap-south-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "ap-south-1",
  },
  "ap-southeast-1": {
    variants: [
      {
        hostname: "s3-control.ap-southeast-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control.dualstack.ap-southeast-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "ap-southeast-1",
  },
  "ap-southeast-2": {
    variants: [
      {
        hostname: "s3-control.ap-southeast-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control.dualstack.ap-southeast-2.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "ap-southeast-2",
  },
  "ca-central-1": {
    variants: [
      {
        hostname: "s3-control.ca-central-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3-control-fips.dualstack.ca-central-1.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-control.dualstack.ca-central-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "ca-central-1",
  },
  "cn-north-1": {
    variants: [
      {
        hostname: "s3-control.cn-north-1.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "s3-control.dualstack.cn-north-1.amazonaws.com.cn",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "cn-north-1",
  },
  "cn-northwest-1": {
    variants: [
      {
        hostname: "s3-control.cn-northwest-1.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "s3-control.dualstack.cn-northwest-1.amazonaws.com.cn",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "cn-northwest-1",
  },
  "eu-central-1": {
    variants: [
      {
        hostname: "s3-control.eu-central-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control.dualstack.eu-central-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "eu-central-1",
  },
  "eu-north-1": {
    variants: [
      {
        hostname: "s3-control.eu-north-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control.dualstack.eu-north-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "eu-north-1",
  },
  "eu-west-1": {
    variants: [
      {
        hostname: "s3-control.eu-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control.dualstack.eu-west-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "eu-west-1",
  },
  "eu-west-2": {
    variants: [
      {
        hostname: "s3-control.eu-west-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control.dualstack.eu-west-2.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "eu-west-2",
  },
  "eu-west-3": {
    variants: [
      {
        hostname: "s3-control.eu-west-3.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control.dualstack.eu-west-3.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "eu-west-3",
  },
  "sa-east-1": {
    variants: [
      {
        hostname: "s3-control.sa-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control.dualstack.sa-east-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "sa-east-1",
  },
  "us-east-1": {
    variants: [
      {
        hostname: "s3-control.us-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control-fips.dualstack.us-east-1.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-control-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3-control.dualstack.us-east-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "us-east-1",
  },
  "us-east-2": {
    variants: [
      {
        hostname: "s3-control.us-east-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control-fips.dualstack.us-east-2.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-control-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3-control.dualstack.us-east-2.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "us-east-2",
  },
  "us-gov-east-1": {
    variants: [
      {
        hostname: "s3-control.us-gov-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control-fips.dualstack.us-gov-east-1.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-control-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3-control.dualstack.us-gov-east-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "us-gov-west-1": {
    variants: [
      {
        hostname: "s3-control.us-gov-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control-fips.dualstack.us-gov-west-1.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-control-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3-control.dualstack.us-gov-west-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "us-west-1": {
    variants: [
      {
        hostname: "s3-control.us-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control-fips.dualstack.us-west-1.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-control-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3-control.dualstack.us-west-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
    signingRegion: "us-west-1",
  },
  "us-west-2": {
    variants: [
      {
        hostname: "s3-control.us-west-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control-fips.dualstack.us-west-2.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-control-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3-control.dualstack.us-west-2.amazonaws.com",
        tags: ["dualstack"],
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
      "ca-central-1-fips",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-central-1",
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
    variants: [
      {
        hostname: "s3-control.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3-control-fips.dualstack.{region}.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-control.dualstack.{region}.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "s3-control.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "s3-control-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "s3-control-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-control.dualstack.{region}.amazonaws.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "s3-control.{region}.c2s.ic.gov",
        tags: [],
      },
      {
        hostname: "s3-control-fips.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "s3-control.{region}.sc2s.sgov.gov",
        tags: [],
      },
      {
        hostname: "s3-control-fips.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-east-1-fips", "us-gov-west-1", "us-gov-west-1-fips"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "s3-control.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-control-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3-control-fips.dualstack.{region}.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-control.dualstack.{region}.amazonaws.com",
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
    signingService: "s3",
    regionHash,
    partitionHash,
  });
