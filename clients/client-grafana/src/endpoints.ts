import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "ap-northeast-1": {
    hostname: "grafana.ap-northeast-1.amazonaws.com",
    signingRegion: "ap-northeast-1",
  },
  "ap-northeast-2": {
    hostname: "grafana.ap-northeast-2.amazonaws.com",
    signingRegion: "ap-northeast-2",
  },
  "ap-southeast-1": {
    hostname: "grafana.ap-southeast-1.amazonaws.com",
    signingRegion: "ap-southeast-1",
  },
  "ap-southeast-2": {
    hostname: "grafana.ap-southeast-2.amazonaws.com",
    signingRegion: "ap-southeast-2",
  },
  "eu-central-1": {
    hostname: "grafana.eu-central-1.amazonaws.com",
    signingRegion: "eu-central-1",
  },
  "eu-west-1": {
    hostname: "grafana.eu-west-1.amazonaws.com",
    signingRegion: "eu-west-1",
  },
  "eu-west-2": {
    hostname: "grafana.eu-west-2.amazonaws.com",
    signingRegion: "eu-west-2",
  },
  "us-east-1": {
    hostname: "grafana.us-east-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "us-east-2": {
    hostname: "grafana.us-east-2.amazonaws.com",
    signingRegion: "us-east-2",
  },
  "us-west-2": {
    hostname: "grafana.us-west-2.amazonaws.com",
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
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    hostname: "grafana.{region}.amazonaws.com",
    variants: [
      {
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        dnsSuffix: "amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        dnsSuffix: "api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "{service}.{region}.{dnsSuffix}",
        dnsSuffix: "api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "grafana.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        dnsSuffix: "amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        dnsSuffix: "api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "{service}.{region}.{dnsSuffix}",
        dnsSuffix: "api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "grafana.{region}.c2s.ic.gov",
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "grafana.{region}.sc2s.sgov.gov",
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "grafana.{region}.amazonaws.com",
    variants: [
      {
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        dnsSuffix: "amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "{service}-fips.{region}.{dnsSuffix}",
        dnsSuffix: "api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "{service}.{region}.{dnsSuffix}",
        dnsSuffix: "api.aws",
        tags: ["dualstack"],
      },
    ],
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (region: string, options?: any) =>
  getRegionInfo(region, {
    ...options,
    signingService: "grafana",
    regionHash,
    partitionHash,
  });
