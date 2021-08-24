import { PartitionHash, RegionHash, getRegionInfo } from "@aws-sdk/config-resolver";
import { RegionInfoProvider } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "af-south-1": {
    hostname: "waf-regional.af-south-1.amazonaws.com",
    signingRegion: "af-south-1",
  },
  "ap-east-1": {
    hostname: "waf-regional.ap-east-1.amazonaws.com",
    signingRegion: "ap-east-1",
  },
  "ap-northeast-1": {
    hostname: "waf-regional.ap-northeast-1.amazonaws.com",
    signingRegion: "ap-northeast-1",
  },
  "ap-northeast-2": {
    hostname: "waf-regional.ap-northeast-2.amazonaws.com",
    signingRegion: "ap-northeast-2",
  },
  "ap-northeast-3": {
    hostname: "waf-regional.ap-northeast-3.amazonaws.com",
    signingRegion: "ap-northeast-3",
  },
  "ap-south-1": {
    hostname: "waf-regional.ap-south-1.amazonaws.com",
    signingRegion: "ap-south-1",
  },
  "ap-southeast-1": {
    hostname: "waf-regional.ap-southeast-1.amazonaws.com",
    signingRegion: "ap-southeast-1",
  },
  "ap-southeast-2": {
    hostname: "waf-regional.ap-southeast-2.amazonaws.com",
    signingRegion: "ap-southeast-2",
  },
  "ca-central-1": {
    hostname: "waf-regional.ca-central-1.amazonaws.com",
    signingRegion: "ca-central-1",
  },
  "cn-north-1": {
    hostname: "waf-regional.cn-north-1.amazonaws.com.cn",
    signingRegion: "cn-north-1",
  },
  "cn-northwest-1": {
    hostname: "waf-regional.cn-northwest-1.amazonaws.com.cn",
    signingRegion: "cn-northwest-1",
  },
  "eu-central-1": {
    hostname: "waf-regional.eu-central-1.amazonaws.com",
    signingRegion: "eu-central-1",
  },
  "eu-north-1": {
    hostname: "waf-regional.eu-north-1.amazonaws.com",
    signingRegion: "eu-north-1",
  },
  "eu-south-1": {
    hostname: "waf-regional.eu-south-1.amazonaws.com",
    signingRegion: "eu-south-1",
  },
  "eu-west-1": {
    hostname: "waf-regional.eu-west-1.amazonaws.com",
    signingRegion: "eu-west-1",
  },
  "eu-west-2": {
    hostname: "waf-regional.eu-west-2.amazonaws.com",
    signingRegion: "eu-west-2",
  },
  "eu-west-3": {
    hostname: "waf-regional.eu-west-3.amazonaws.com",
    signingRegion: "eu-west-3",
  },
  "fips-af-south-1": {
    hostname: "waf-regional-fips.af-south-1.amazonaws.com",
    signingRegion: "af-south-1",
  },
  "fips-ap-east-1": {
    hostname: "waf-regional-fips.ap-east-1.amazonaws.com",
    signingRegion: "ap-east-1",
  },
  "fips-ap-northeast-1": {
    hostname: "waf-regional-fips.ap-northeast-1.amazonaws.com",
    signingRegion: "ap-northeast-1",
  },
  "fips-ap-northeast-2": {
    hostname: "waf-regional-fips.ap-northeast-2.amazonaws.com",
    signingRegion: "ap-northeast-2",
  },
  "fips-ap-northeast-3": {
    hostname: "waf-regional-fips.ap-northeast-3.amazonaws.com",
    signingRegion: "ap-northeast-3",
  },
  "fips-ap-south-1": {
    hostname: "waf-regional-fips.ap-south-1.amazonaws.com",
    signingRegion: "ap-south-1",
  },
  "fips-ap-southeast-1": {
    hostname: "waf-regional-fips.ap-southeast-1.amazonaws.com",
    signingRegion: "ap-southeast-1",
  },
  "fips-ap-southeast-2": {
    hostname: "waf-regional-fips.ap-southeast-2.amazonaws.com",
    signingRegion: "ap-southeast-2",
  },
  "fips-ca-central-1": {
    hostname: "waf-regional-fips.ca-central-1.amazonaws.com",
    signingRegion: "ca-central-1",
  },
  "fips-cn-north-1": {
    hostname: "waf-regional-fips.cn-north-1.amazonaws.com.cn",
    signingRegion: "cn-north-1",
  },
  "fips-cn-northwest-1": {
    hostname: "waf-regional-fips.cn-northwest-1.amazonaws.com.cn",
    signingRegion: "cn-northwest-1",
  },
  "fips-eu-central-1": {
    hostname: "waf-regional-fips.eu-central-1.amazonaws.com",
    signingRegion: "eu-central-1",
  },
  "fips-eu-north-1": {
    hostname: "waf-regional-fips.eu-north-1.amazonaws.com",
    signingRegion: "eu-north-1",
  },
  "fips-eu-south-1": {
    hostname: "waf-regional-fips.eu-south-1.amazonaws.com",
    signingRegion: "eu-south-1",
  },
  "fips-eu-west-1": {
    hostname: "waf-regional-fips.eu-west-1.amazonaws.com",
    signingRegion: "eu-west-1",
  },
  "fips-eu-west-2": {
    hostname: "waf-regional-fips.eu-west-2.amazonaws.com",
    signingRegion: "eu-west-2",
  },
  "fips-eu-west-3": {
    hostname: "waf-regional-fips.eu-west-3.amazonaws.com",
    signingRegion: "eu-west-3",
  },
  "fips-me-south-1": {
    hostname: "waf-regional-fips.me-south-1.amazonaws.com",
    signingRegion: "me-south-1",
  },
  "fips-sa-east-1": {
    hostname: "waf-regional-fips.sa-east-1.amazonaws.com",
    signingRegion: "sa-east-1",
  },
  "fips-us-east-1": {
    hostname: "waf-regional-fips.us-east-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "fips-us-east-2": {
    hostname: "waf-regional-fips.us-east-2.amazonaws.com",
    signingRegion: "us-east-2",
  },
  "fips-us-gov-east-1": {
    hostname: "waf-regional-fips.us-gov-east-1.amazonaws.com",
    signingRegion: "us-gov-east-1",
  },
  "fips-us-gov-west-1": {
    hostname: "waf-regional-fips.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "fips-us-west-1": {
    hostname: "waf-regional-fips.us-west-1.amazonaws.com",
    signingRegion: "us-west-1",
  },
  "fips-us-west-2": {
    hostname: "waf-regional-fips.us-west-2.amazonaws.com",
    signingRegion: "us-west-2",
  },
  "me-south-1": {
    hostname: "waf-regional.me-south-1.amazonaws.com",
    signingRegion: "me-south-1",
  },
  "sa-east-1": {
    hostname: "waf-regional.sa-east-1.amazonaws.com",
    signingRegion: "sa-east-1",
  },
  "us-east-1": {
    hostname: "waf-regional.us-east-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "us-east-2": {
    hostname: "waf-regional.us-east-2.amazonaws.com",
    signingRegion: "us-east-2",
  },
  "us-gov-east-1": {
    hostname: "waf-regional.us-gov-east-1.amazonaws.com",
    signingRegion: "us-gov-east-1",
  },
  "us-gov-west-1": {
    hostname: "waf-regional.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "us-west-1": {
    hostname: "waf-regional.us-west-1.amazonaws.com",
    signingRegion: "us-west-1",
  },
  "us-west-2": {
    hostname: "waf-regional.us-west-2.amazonaws.com",
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
      "fips-af-south-1",
      "fips-ap-east-1",
      "fips-ap-northeast-1",
      "fips-ap-northeast-2",
      "fips-ap-northeast-3",
      "fips-ap-south-1",
      "fips-ap-southeast-1",
      "fips-ap-southeast-2",
      "fips-ca-central-1",
      "fips-eu-central-1",
      "fips-eu-north-1",
      "fips-eu-south-1",
      "fips-eu-west-1",
      "fips-eu-west-2",
      "fips-eu-west-3",
      "fips-me-south-1",
      "fips-sa-east-1",
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
    hostname: "waf-regional.{region}.amazonaws.com",
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1", "fips-cn-north-1", "fips-cn-northwest-1"],
    hostname: "waf-regional.{region}.amazonaws.com.cn",
  },
  "aws-iso": {
    regions: ["us-iso-east-1"],
    hostname: "waf-regional.{region}.c2s.ic.gov",
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    hostname: "waf-regional.{region}.sc2s.sgov.gov",
  },
  "aws-us-gov": {
    regions: ["fips-us-gov-east-1", "fips-us-gov-west-1", "us-gov-east-1", "us-gov-west-1"],
    hostname: "waf-regional.{region}.amazonaws.com",
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (region: string, options?: any) =>
  getRegionInfo(region, {
    ...options,
    signingService: "waf-regional",
    regionHash,
    partitionHash,
  });
