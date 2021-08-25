import { PartitionHash, RegionHash, getRegionInfo } from "@aws-sdk/config-resolver";
import { RegionInfoProvider } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "fips-af-south-1": {
    hostname: "elasticfilesystem-fips.af-south-1.amazonaws.com",
    signingRegion: "af-south-1",
  },
  "fips-ap-east-1": {
    hostname: "elasticfilesystem-fips.ap-east-1.amazonaws.com",
    signingRegion: "ap-east-1",
  },
  "fips-ap-northeast-1": {
    hostname: "elasticfilesystem-fips.ap-northeast-1.amazonaws.com",
    signingRegion: "ap-northeast-1",
  },
  "fips-ap-northeast-2": {
    hostname: "elasticfilesystem-fips.ap-northeast-2.amazonaws.com",
    signingRegion: "ap-northeast-2",
  },
  "fips-ap-northeast-3": {
    hostname: "elasticfilesystem-fips.ap-northeast-3.amazonaws.com",
    signingRegion: "ap-northeast-3",
  },
  "fips-ap-south-1": {
    hostname: "elasticfilesystem-fips.ap-south-1.amazonaws.com",
    signingRegion: "ap-south-1",
  },
  "fips-ap-southeast-1": {
    hostname: "elasticfilesystem-fips.ap-southeast-1.amazonaws.com",
    signingRegion: "ap-southeast-1",
  },
  "fips-ap-southeast-2": {
    hostname: "elasticfilesystem-fips.ap-southeast-2.amazonaws.com",
    signingRegion: "ap-southeast-2",
  },
  "fips-ca-central-1": {
    hostname: "elasticfilesystem-fips.ca-central-1.amazonaws.com",
    signingRegion: "ca-central-1",
  },
  "fips-cn-north-1": {
    hostname: "elasticfilesystem-fips.cn-north-1.amazonaws.com.cn",
    signingRegion: "cn-north-1",
  },
  "fips-cn-northwest-1": {
    hostname: "elasticfilesystem-fips.cn-northwest-1.amazonaws.com.cn",
    signingRegion: "cn-northwest-1",
  },
  "fips-eu-central-1": {
    hostname: "elasticfilesystem-fips.eu-central-1.amazonaws.com",
    signingRegion: "eu-central-1",
  },
  "fips-eu-north-1": {
    hostname: "elasticfilesystem-fips.eu-north-1.amazonaws.com",
    signingRegion: "eu-north-1",
  },
  "fips-eu-south-1": {
    hostname: "elasticfilesystem-fips.eu-south-1.amazonaws.com",
    signingRegion: "eu-south-1",
  },
  "fips-eu-west-1": {
    hostname: "elasticfilesystem-fips.eu-west-1.amazonaws.com",
    signingRegion: "eu-west-1",
  },
  "fips-eu-west-2": {
    hostname: "elasticfilesystem-fips.eu-west-2.amazonaws.com",
    signingRegion: "eu-west-2",
  },
  "fips-eu-west-3": {
    hostname: "elasticfilesystem-fips.eu-west-3.amazonaws.com",
    signingRegion: "eu-west-3",
  },
  "fips-me-south-1": {
    hostname: "elasticfilesystem-fips.me-south-1.amazonaws.com",
    signingRegion: "me-south-1",
  },
  "fips-sa-east-1": {
    hostname: "elasticfilesystem-fips.sa-east-1.amazonaws.com",
    signingRegion: "sa-east-1",
  },
  "fips-us-east-1": {
    hostname: "elasticfilesystem-fips.us-east-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "fips-us-east-2": {
    hostname: "elasticfilesystem-fips.us-east-2.amazonaws.com",
    signingRegion: "us-east-2",
  },
  "fips-us-gov-east-1": {
    hostname: "elasticfilesystem-fips.us-gov-east-1.amazonaws.com",
    signingRegion: "us-gov-east-1",
  },
  "fips-us-gov-west-1": {
    hostname: "elasticfilesystem-fips.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "fips-us-iso-east-1": {
    hostname: "elasticfilesystem-fips.us-iso-east-1.c2s.ic.gov",
    signingRegion: "us-iso-east-1",
  },
  "fips-us-west-1": {
    hostname: "elasticfilesystem-fips.us-west-1.amazonaws.com",
    signingRegion: "us-west-1",
  },
  "fips-us-west-2": {
    hostname: "elasticfilesystem-fips.us-west-2.amazonaws.com",
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
    hostname: "elasticfilesystem.{region}.amazonaws.com",
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1", "fips-cn-north-1", "fips-cn-northwest-1"],
    hostname: "elasticfilesystem.{region}.amazonaws.com.cn",
  },
  "aws-iso": {
    regions: ["fips-us-iso-east-1", "us-iso-east-1"],
    hostname: "elasticfilesystem.{region}.c2s.ic.gov",
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    hostname: "elasticfilesystem.{region}.sc2s.sgov.gov",
  },
  "aws-us-gov": {
    regions: ["fips-us-gov-east-1", "fips-us-gov-west-1", "us-gov-east-1", "us-gov-west-1"],
    hostname: "elasticfilesystem.{region}.amazonaws.com",
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (region: string, options?: any) =>
  getRegionInfo(region, {
    ...options,
    signingService: "elasticfilesystem",
    regionHash,
    partitionHash,
  });
