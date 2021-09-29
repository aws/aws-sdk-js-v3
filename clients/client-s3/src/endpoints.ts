import { PartitionHash, RegionHash, getRegionInfo } from "@aws-sdk/config-resolver";
import { RegionInfoProvider } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "accesspoint-af-south-1": {
    hostname: "s3-accesspoint.af-south-1.amazonaws.com",
  },
  "accesspoint-ap-east-1": {
    hostname: "s3-accesspoint.ap-east-1.amazonaws.com",
  },
  "accesspoint-ap-northeast-1": {
    hostname: "s3-accesspoint.ap-northeast-1.amazonaws.com",
  },
  "accesspoint-ap-northeast-2": {
    hostname: "s3-accesspoint.ap-northeast-2.amazonaws.com",
  },
  "accesspoint-ap-northeast-3": {
    hostname: "s3-accesspoint.ap-northeast-3.amazonaws.com",
  },
  "accesspoint-ap-south-1": {
    hostname: "s3-accesspoint.ap-south-1.amazonaws.com",
  },
  "accesspoint-ap-southeast-1": {
    hostname: "s3-accesspoint.ap-southeast-1.amazonaws.com",
  },
  "accesspoint-ap-southeast-2": {
    hostname: "s3-accesspoint.ap-southeast-2.amazonaws.com",
  },
  "accesspoint-ca-central-1": {
    hostname: "s3-accesspoint.ca-central-1.amazonaws.com",
  },
  "accesspoint-cn-north-1": {
    hostname: "s3-accesspoint.cn-north-1.amazonaws.com.cn",
  },
  "accesspoint-cn-northwest-1": {
    hostname: "s3-accesspoint.cn-northwest-1.amazonaws.com.cn",
  },
  "accesspoint-eu-central-1": {
    hostname: "s3-accesspoint.eu-central-1.amazonaws.com",
  },
  "accesspoint-eu-north-1": {
    hostname: "s3-accesspoint.eu-north-1.amazonaws.com",
  },
  "accesspoint-eu-south-1": {
    hostname: "s3-accesspoint.eu-south-1.amazonaws.com",
  },
  "accesspoint-eu-west-1": {
    hostname: "s3-accesspoint.eu-west-1.amazonaws.com",
  },
  "accesspoint-eu-west-2": {
    hostname: "s3-accesspoint.eu-west-2.amazonaws.com",
  },
  "accesspoint-eu-west-3": {
    hostname: "s3-accesspoint.eu-west-3.amazonaws.com",
  },
  "accesspoint-me-south-1": {
    hostname: "s3-accesspoint.me-south-1.amazonaws.com",
  },
  "accesspoint-sa-east-1": {
    hostname: "s3-accesspoint.sa-east-1.amazonaws.com",
  },
  "accesspoint-us-east-1": {
    hostname: "s3-accesspoint.us-east-1.amazonaws.com",
  },
  "accesspoint-us-east-2": {
    hostname: "s3-accesspoint.us-east-2.amazonaws.com",
  },
  "accesspoint-us-gov-east-1": {
    hostname: "s3-accesspoint.us-gov-east-1.amazonaws.com",
  },
  "accesspoint-us-gov-west-1": {
    hostname: "s3-accesspoint.us-gov-west-1.amazonaws.com",
  },
  "accesspoint-us-west-1": {
    hostname: "s3-accesspoint.us-west-1.amazonaws.com",
  },
  "accesspoint-us-west-2": {
    hostname: "s3-accesspoint.us-west-2.amazonaws.com",
  },
  "ap-northeast-1": {
    hostname: "s3.ap-northeast-1.amazonaws.com",
  },
  "ap-southeast-1": {
    hostname: "s3.ap-southeast-1.amazonaws.com",
  },
  "ap-southeast-2": {
    hostname: "s3.ap-southeast-2.amazonaws.com",
  },
  "aws-global": {
    hostname: "s3.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "eu-west-1": {
    hostname: "s3.eu-west-1.amazonaws.com",
  },
  "fips-accesspoint-ca-central-1": {
    hostname: "s3-accesspoint-fips.ca-central-1.amazonaws.com",
  },
  "fips-accesspoint-us-east-1": {
    hostname: "s3-accesspoint-fips.us-east-1.amazonaws.com",
  },
  "fips-accesspoint-us-east-2": {
    hostname: "s3-accesspoint-fips.us-east-2.amazonaws.com",
  },
  "fips-accesspoint-us-gov-east-1": {
    hostname: "s3-accesspoint-fips.us-gov-east-1.amazonaws.com",
  },
  "fips-accesspoint-us-gov-west-1": {
    hostname: "s3-accesspoint-fips.us-gov-west-1.amazonaws.com",
  },
  "fips-accesspoint-us-west-1": {
    hostname: "s3-accesspoint-fips.us-west-1.amazonaws.com",
  },
  "fips-accesspoint-us-west-2": {
    hostname: "s3-accesspoint-fips.us-west-2.amazonaws.com",
  },
  "fips-us-gov-west-1": {
    hostname: "s3-fips.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "s3-external-1": {
    hostname: "s3-external-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "sa-east-1": {
    hostname: "s3.sa-east-1.amazonaws.com",
  },
  "us-east-1": {
    hostname: "s3.us-east-1.amazonaws.com",
  },
  "us-gov-east-1": {
    hostname: "s3.us-gov-east-1.amazonaws.com",
  },
  "us-gov-west-1": {
    hostname: "s3.us-gov-west-1.amazonaws.com",
  },
  "us-west-1": {
    hostname: "s3.us-west-1.amazonaws.com",
  },
  "us-west-2": {
    hostname: "s3.us-west-2.amazonaws.com",
  },
};

const partitionHash: PartitionHash = {
  aws: {
    regions: [
      "accesspoint-af-south-1",
      "accesspoint-ap-east-1",
      "accesspoint-ap-northeast-1",
      "accesspoint-ap-northeast-2",
      "accesspoint-ap-northeast-3",
      "accesspoint-ap-south-1",
      "accesspoint-ap-southeast-1",
      "accesspoint-ap-southeast-2",
      "accesspoint-ca-central-1",
      "accesspoint-eu-central-1",
      "accesspoint-eu-north-1",
      "accesspoint-eu-south-1",
      "accesspoint-eu-west-1",
      "accesspoint-eu-west-2",
      "accesspoint-eu-west-3",
      "accesspoint-me-south-1",
      "accesspoint-sa-east-1",
      "accesspoint-us-east-1",
      "accesspoint-us-east-2",
      "accesspoint-us-west-1",
      "accesspoint-us-west-2",
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
      "me-south-1",
      "s3-external-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    hostname: "s3.{region}.amazonaws.com",
  },
  "aws-cn": {
    regions: ["accesspoint-cn-north-1", "accesspoint-cn-northwest-1", "cn-north-1", "cn-northwest-1"],
    hostname: "s3.{region}.amazonaws.com.cn",
  },
  "aws-iso": {
    regions: ["us-iso-east-1"],
    hostname: "s3.{region}.c2s.ic.gov",
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    hostname: "s3.{region}.sc2s.sgov.gov",
  },
  "aws-us-gov": {
    regions: [
      "accesspoint-us-gov-east-1",
      "accesspoint-us-gov-west-1",
      "fips-accesspoint-us-gov-east-1",
      "fips-accesspoint-us-gov-west-1",
      "fips-us-gov-west-1",
      "us-gov-east-1",
      "us-gov-west-1",
    ],
    hostname: "s3.{region}.amazonaws.com",
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (region: string, options?: any) =>
  getRegionInfo(region, {
    ...options,
    signingService: "s3",
    regionHash,
    partitionHash,
  });
