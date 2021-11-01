import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "transcribestreaming-ca-central-1": {
    variants: [
      {
        hostname: "transcribestreaming-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "ca-central-1",
  },
  "transcribestreaming-fips-ca-central-1": {
    hostname: "transcribestreaming-fips.ca-central-1.amazonaws.com",
    signingRegion: "ca-central-1",
  },
  "transcribestreaming-fips-us-east-1": {
    hostname: "transcribestreaming-fips.us-east-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "transcribestreaming-fips-us-east-2": {
    hostname: "transcribestreaming-fips.us-east-2.amazonaws.com",
    signingRegion: "us-east-2",
  },
  "transcribestreaming-fips-us-west-2": {
    hostname: "transcribestreaming-fips.us-west-2.amazonaws.com",
    signingRegion: "us-west-2",
  },
  "transcribestreaming-us-east-1": {
    variants: [
      {
        hostname: "transcribestreaming-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-east-1",
  },
  "transcribestreaming-us-east-2": {
    variants: [
      {
        hostname: "transcribestreaming-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
    signingRegion: "us-east-2",
  },
  "transcribestreaming-us-west-2": {
    variants: [
      {
        hostname: "transcribestreaming-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
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
      "transcribestreaming-ca-central-1",
      "transcribestreaming-fips-ca-central-1",
      "transcribestreaming-fips-us-east-1",
      "transcribestreaming-fips-us-east-2",
      "transcribestreaming-fips-us-west-2",
      "transcribestreaming-us-east-1",
      "transcribestreaming-us-east-2",
      "transcribestreaming-us-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    hostname: "transcribestreaming.{region}.amazonaws.com",
    variants: [
      {
        hostname: "transcribestreaming-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "transcribestreaming-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "transcribestreaming.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "transcribestreaming.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "transcribestreaming-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "transcribestreaming-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "transcribestreaming.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "transcribestreaming.{region}.c2s.ic.gov",
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "transcribestreaming.{region}.sc2s.sgov.gov",
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "transcribestreaming.{region}.amazonaws.com",
    variants: [
      {
        hostname: "transcribestreaming-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "transcribestreaming-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "transcribestreaming.{region}.api.aws",
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
    signingService: "transcribe",
    regionHash,
    partitionHash,
  });
