import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "af-south-1": {
    hostname: "s3.af-south-1.amazonaws.com",
    variants: [
      {
        hostname: "s3.dualstack.af-south-1.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.af-south-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-east-1": {
    hostname: "s3.ap-east-1.amazonaws.com",
    variants: [
      {
        hostname: "s3.dualstack.ap-east-1.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.ap-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-northeast-1": {
    hostname: "s3.ap-northeast-1.amazonaws.com",
    variants: [
      {
        hostname: "s3.dualstack.ap-northeast-1.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.ap-northeast-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-northeast-2": {
    hostname: "s3.ap-northeast-2.amazonaws.com",
    variants: [
      {
        hostname: "s3.dualstack.ap-northeast-2.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.ap-northeast-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-northeast-3": {
    hostname: "s3.ap-northeast-3.amazonaws.com",
    variants: [
      {
        hostname: "s3.dualstack.ap-northeast-3.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.ap-northeast-3.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-south-1": {
    hostname: "s3.ap-south-1.amazonaws.com",
    variants: [
      {
        hostname: "s3.dualstack.ap-south-1.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.ap-south-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-southeast-1": {
    hostname: "s3.ap-southeast-1.amazonaws.com",
    variants: [
      {
        hostname: "s3.dualstack.ap-southeast-1.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.ap-southeast-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "ap-southeast-2": {
    hostname: "s3.ap-southeast-2.amazonaws.com",
    variants: [
      {
        hostname: "s3.dualstack.ap-southeast-2.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.ap-southeast-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "aws-global": {
    hostname: "s3.amazonaws.com",
    variants: [
      {
        hostname: "s3.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "ca-central-1": {
    hostname: "s3.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "s3-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3-fips.dualstack.ca-central-1.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3.dualstack.ca-central-1.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "cn-north-1": {
    hostname: "s3.cn-north-1.amazonaws.com.cn",
    variants: [
      {
        hostname: "s3.dualstack.cn-north-1.amazonaws.com.cn",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.cn-north-1.amazonaws.com.cn",
        tags: [],
      },
    ],
  },
  "cn-northwest-1": {
    hostname: "s3.cn-northwest-1.amazonaws.com.cn",
    variants: [
      {
        hostname: "s3.dualstack.cn-northwest-1.amazonaws.com.cn",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.cn-northwest-1.amazonaws.com.cn",
        tags: [],
      },
    ],
  },
  "eu-central-1": {
    hostname: "s3.eu-central-1.amazonaws.com",
    variants: [
      {
        hostname: "s3.dualstack.eu-central-1.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.eu-central-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-north-1": {
    hostname: "s3.eu-north-1.amazonaws.com",
    variants: [
      {
        hostname: "s3.dualstack.eu-north-1.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.eu-north-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-south-1": {
    hostname: "s3.eu-south-1.amazonaws.com",
    variants: [
      {
        hostname: "s3.dualstack.eu-south-1.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.eu-south-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-west-1": {
    hostname: "s3.eu-west-1.amazonaws.com",
    variants: [
      {
        hostname: "s3.dualstack.eu-west-1.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.eu-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-west-2": {
    hostname: "s3.eu-west-2.amazonaws.com",
    variants: [
      {
        hostname: "s3.dualstack.eu-west-2.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.eu-west-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "eu-west-3": {
    hostname: "s3.eu-west-3.amazonaws.com",
    variants: [
      {
        hostname: "s3.dualstack.eu-west-3.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.eu-west-3.amazonaws.com",
        tags: [],
      },
    ],
  },
  "fips-accesspoint-ca-central-1": {
    hostname: "s3-accesspoint-fips.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "s3-accesspoint-fips.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "fips-accesspoint-us-east-1": {
    hostname: "s3-accesspoint-fips.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "s3-accesspoint-fips.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "fips-accesspoint-us-east-2": {
    hostname: "s3-accesspoint-fips.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "s3-accesspoint-fips.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "fips-accesspoint-us-gov-east-1": {
    hostname: "s3-accesspoint-fips.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "s3-accesspoint-fips.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "fips-accesspoint-us-gov-west-1": {
    hostname: "s3-accesspoint-fips.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "s3-accesspoint-fips.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "fips-accesspoint-us-west-1": {
    hostname: "s3-accesspoint-fips.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "s3-accesspoint-fips.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "fips-accesspoint-us-west-2": {
    hostname: "s3-accesspoint-fips.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "s3-accesspoint-fips.us-west-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "fips-ca-central-1": {
    hostname: "s3-fips.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "s3-fips.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ca-central-1",
  },
  "fips-us-east-1": {
    hostname: "s3-fips.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "s3-fips.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "fips-us-east-2": {
    hostname: "s3-fips.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "s3-fips.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-2",
  },
  "fips-us-gov-east-1": {
    hostname: "s3-fips.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "s3-fips.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-east-1",
  },
  "fips-us-gov-west-1": {
    hostname: "s3-fips.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "s3-fips.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "fips-us-west-1": {
    hostname: "s3-fips.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "s3-fips.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-1",
  },
  "fips-us-west-2": {
    hostname: "s3-fips.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "s3-fips.us-west-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-2",
  },
  "me-south-1": {
    hostname: "s3.me-south-1.amazonaws.com",
    variants: [
      {
        hostname: "s3.dualstack.me-south-1.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.me-south-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "s3-external-1": {
    hostname: "s3-external-1.amazonaws.com",
    variants: [
      {
        hostname: "s3-external-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "sa-east-1": {
    hostname: "s3.sa-east-1.amazonaws.com",
    variants: [
      {
        hostname: "s3.dualstack.sa-east-1.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.sa-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-east-1": {
    hostname: "s3.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "s3-fips.dualstack.us-east-1.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3.dualstack.us-east-1.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-east-2": {
    hostname: "s3.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "s3-fips.dualstack.us-east-2.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3.dualstack.us-east-2.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-gov-east-1": {
    hostname: "s3.us-gov-east-1.amazonaws.com",
    variants: [
      {
        hostname: "s3-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3.dualstack.us-gov-east-1.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.us-gov-east-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-gov-west-1": {
    hostname: "s3.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "s3-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3.dualstack.us-gov-west-1.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-west-1": {
    hostname: "s3.us-west-1.amazonaws.com",
    variants: [
      {
        hostname: "s3-fips.dualstack.us-west-1.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3.dualstack.us-west-1.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.us-west-1.amazonaws.com",
        tags: [],
      },
    ],
  },
  "us-west-2": {
    hostname: "s3.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "s3-fips.dualstack.us-west-2.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3.dualstack.us-west-2.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.us-west-2.amazonaws.com",
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
      "aws-global",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "fips-accesspoint-ca-central-1",
      "fips-accesspoint-us-east-1",
      "fips-accesspoint-us-east-2",
      "fips-accesspoint-us-west-1",
      "fips-accesspoint-us-west-2",
      "fips-ca-central-1",
      "fips-us-east-1",
      "fips-us-east-2",
      "fips-us-west-1",
      "fips-us-west-2",
      "me-south-1",
      "s3-external-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    hostname: "s3.{region}.amazonaws.com",
    variants: [
      {
        hostname: "s3-fips.dualstack.{region}.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3.dualstack.{region}.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.{region}.amazonaws.com",
        tags: [],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "s3.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "s3.dualstack.{region}.amazonaws.com.cn",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.{region}.amazonaws.com.cn",
        tags: [],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "s3.{region}.c2s.ic.gov",
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "s3.{region}.sc2s.sgov.gov",
  },
  "aws-us-gov": {
    regions: [
      "fips-accesspoint-us-gov-east-1",
      "fips-accesspoint-us-gov-west-1",
      "fips-us-gov-east-1",
      "fips-us-gov-west-1",
      "us-gov-east-1",
      "us-gov-west-1",
    ],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "s3.{region}.amazonaws.com",
    variants: [
      {
        hostname: "s3-fips.dualstack.{region}.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3.dualstack.{region}.amazonaws.com",
        tags: ["dualstack"],
      },
      {
        hostname: "s3.{region}.amazonaws.com",
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
    signingService: "s3",
    regionHash,
    partitionHash,
  });
