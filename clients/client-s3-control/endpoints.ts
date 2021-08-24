import { PartitionHash, RegionHash, getRegionInfo } from "@aws-sdk/config-resolver";
import { RegionInfoProvider } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "ap-northeast-1": {
    hostname: "s3-control.ap-northeast-1.amazonaws.com",
    signingRegion: "ap-northeast-1",
  },
  "ap-northeast-2": {
    hostname: "s3-control.ap-northeast-2.amazonaws.com",
    signingRegion: "ap-northeast-2",
  },
  "ap-northeast-3": {
    hostname: "s3-control.ap-northeast-3.amazonaws.com",
    signingRegion: "ap-northeast-3",
  },
  "ap-south-1": {
    hostname: "s3-control.ap-south-1.amazonaws.com",
    signingRegion: "ap-south-1",
  },
  "ap-southeast-1": {
    hostname: "s3-control.ap-southeast-1.amazonaws.com",
    signingRegion: "ap-southeast-1",
  },
  "ap-southeast-2": {
    hostname: "s3-control.ap-southeast-2.amazonaws.com",
    signingRegion: "ap-southeast-2",
  },
  "ca-central-1": {
    hostname: "s3-control.ca-central-1.amazonaws.com",
    signingRegion: "ca-central-1",
  },
  "ca-central-1-fips": {
    hostname: "s3-control-fips.ca-central-1.amazonaws.com",
    signingRegion: "ca-central-1",
  },
  "cn-north-1": {
    hostname: "s3-control.cn-north-1.amazonaws.com.cn",
    signingRegion: "cn-north-1",
  },
  "cn-northwest-1": {
    hostname: "s3-control.cn-northwest-1.amazonaws.com.cn",
    signingRegion: "cn-northwest-1",
  },
  "eu-central-1": {
    hostname: "s3-control.eu-central-1.amazonaws.com",
    signingRegion: "eu-central-1",
  },
  "eu-north-1": {
    hostname: "s3-control.eu-north-1.amazonaws.com",
    signingRegion: "eu-north-1",
  },
  "eu-west-1": {
    hostname: "s3-control.eu-west-1.amazonaws.com",
    signingRegion: "eu-west-1",
  },
  "eu-west-2": {
    hostname: "s3-control.eu-west-2.amazonaws.com",
    signingRegion: "eu-west-2",
  },
  "eu-west-3": {
    hostname: "s3-control.eu-west-3.amazonaws.com",
    signingRegion: "eu-west-3",
  },
  "sa-east-1": {
    hostname: "s3-control.sa-east-1.amazonaws.com",
    signingRegion: "sa-east-1",
  },
  "us-east-1": {
    hostname: "s3-control.us-east-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "us-east-1-fips": {
    hostname: "s3-control-fips.us-east-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "us-east-2": {
    hostname: "s3-control.us-east-2.amazonaws.com",
    signingRegion: "us-east-2",
  },
  "us-east-2-fips": {
    hostname: "s3-control-fips.us-east-2.amazonaws.com",
    signingRegion: "us-east-2",
  },
  "us-gov-east-1": {
    hostname: "s3-control.us-gov-east-1.amazonaws.com",
    signingRegion: "us-gov-east-1",
  },
  "us-gov-east-1-fips": {
    hostname: "s3-control-fips.us-gov-east-1.amazonaws.com",
    signingRegion: "us-gov-east-1",
  },
  "us-gov-west-1": {
    hostname: "s3-control.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "us-gov-west-1-fips": {
    hostname: "s3-control-fips.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "us-west-1": {
    hostname: "s3-control.us-west-1.amazonaws.com",
    signingRegion: "us-west-1",
  },
  "us-west-1-fips": {
    hostname: "s3-control-fips.us-west-1.amazonaws.com",
    signingRegion: "us-west-1",
  },
  "us-west-2": {
    hostname: "s3-control.us-west-2.amazonaws.com",
    signingRegion: "us-west-2",
  },
  "us-west-2-fips": {
    hostname: "s3-control-fips.us-west-2.amazonaws.com",
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
      "ca-central-1-fips",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
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
    hostname: "s3-control.{region}.amazonaws.com",
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    hostname: "s3-control.{region}.amazonaws.com.cn",
  },
  "aws-iso": {
    regions: ["us-iso-east-1"],
    hostname: "s3-control.{region}.c2s.ic.gov",
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    hostname: "s3-control.{region}.sc2s.sgov.gov",
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-east-1-fips", "us-gov-west-1", "us-gov-west-1-fips"],
    hostname: "s3-control.{region}.amazonaws.com",
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (region: string, options?: any) =>
  getRegionInfo(region, {
    ...options,
    signingService: "s3",
    regionHash,
    partitionHash,
  });
