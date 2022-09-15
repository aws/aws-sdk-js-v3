// smithy-typescript generated code
import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "us-east-1": {
    variants: [
      {
        hostname: "participant.connect-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-west-1": {
    variants: [
      {
        hostname: "participant.connect.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "us-west-2": {
    variants: [
      {
        hostname: "participant.connect-fips.us-west-2.amazonaws.com",
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
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "fips-us-east-1",
      "fips-us-west-2",
      "me-central-1",
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
        hostname: "participant.connect.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "participant.connect-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "participant.connect-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "participant.connect.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "participant.connect.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "participant.connect-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "participant.connect-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "participant.connect.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "participant.connect.{region}.c2s.ic.gov",
        tags: [],
      },
      {
        hostname: "participant.connect-fips.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "participant.connect.{region}.sc2s.sgov.gov",
        tags: [],
      },
      {
        hostname: "participant.connect-fips.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "participant.connect.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "participant.connect-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "participant.connect-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "participant.connect.{region}.api.aws",
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
    signingService: "execute-api",
    regionHash,
    partitionHash,
  });
