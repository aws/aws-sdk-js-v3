import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "ca-central-1": {
    variants: [
      {
        hostname: "cloudcontrolapi-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "fips-ca-central-1": {
    hostname: "cloudcontrolapi-fips.ca-central-1.amazonaws.com",
    signingRegion: "ca-central-1",
  },
  "fips-us-east-1": {
    hostname: "cloudcontrolapi-fips.us-east-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "fips-us-east-2": {
    hostname: "cloudcontrolapi-fips.us-east-2.amazonaws.com",
    signingRegion: "us-east-2",
  },
  "fips-us-gov-east-1": {
    hostname: "cloudcontrolapi-fips.us-gov-east-1.amazonaws.com",
    signingRegion: "us-gov-east-1",
  },
  "fips-us-gov-west-1": {
    hostname: "cloudcontrolapi-fips.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "fips-us-west-1": {
    hostname: "cloudcontrolapi-fips.us-west-1.amazonaws.com",
    signingRegion: "us-west-1",
  },
  "fips-us-west-2": {
    hostname: "cloudcontrolapi-fips.us-west-2.amazonaws.com",
    signingRegion: "us-west-2",
  },
  "us-east-1": {
    variants: [
      {
        hostname: "cloudcontrolapi-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-2": {
    variants: [
      {
        hostname: "cloudcontrolapi-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-east-1": {
    variants: [
      {
        hostname: "cloudcontrolapi-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-west-1": {
    variants: [
      {
        hostname: "cloudcontrolapi-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-1": {
    variants: [
      {
        hostname: "cloudcontrolapi-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-2": {
    variants: [
      {
        hostname: "cloudcontrolapi-fips.us-west-2.amazonaws.com",
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
    hostname: "cloudcontrolapi.{region}.amazonaws.com",
    variants: [
      {
        dnsSuffix: "amazonaws.com",
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        tags: ["fips"],
      },
      {
        dnsSuffix: "api.aws",
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        tags: ["dualstack", "fips"],
      },
      {
        dnsSuffix: "api.aws",
        hostname: "{service}.{region}.{dnsSuffix}",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "cloudcontrolapi.{region}.amazonaws.com.cn",
    variants: [
      {
        dnsSuffix: "amazonaws.com.cn",
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        tags: ["fips"],
      },
      {
        dnsSuffix: "api.amazonwebservices.com.cn",
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        tags: ["dualstack", "fips"],
      },
      {
        dnsSuffix: "api.amazonwebservices.com.cn",
        hostname: "{service}.{region}.{dnsSuffix}",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "cloudcontrolapi.{region}.c2s.ic.gov",
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "cloudcontrolapi.{region}.sc2s.sgov.gov",
  },
  "aws-us-gov": {
    regions: ["fips-us-gov-east-1", "fips-us-gov-west-1", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "cloudcontrolapi.{region}.amazonaws.com",
    variants: [
      {
        dnsSuffix: "amazonaws.com",
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        tags: ["fips"],
      },
      {
        dnsSuffix: "api.aws",
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        tags: ["dualstack", "fips"],
      },
      {
        dnsSuffix: "api.aws",
        hostname: "{service}.{region}.{dnsSuffix}",
        tags: ["dualstack"],
      },
    ],
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (region: string, options?: any) =>
  getRegionInfo(region, {
    ...options,
    signingService: "cloudcontrolapi",
    regionHash,
    partitionHash,
  });
