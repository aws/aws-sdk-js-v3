import { PartitionHash, RegionHash, getRegionInfo } from "@aws-sdk/config-resolver";
import { RegionInfoProvider } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "af-south-1": {
    hostname: "api.ecr.af-south-1.amazonaws.com",
    signingRegion: "af-south-1",
  },
  "ap-east-1": {
    hostname: "api.ecr.ap-east-1.amazonaws.com",
    signingRegion: "ap-east-1",
  },
  "ap-northeast-1": {
    hostname: "api.ecr.ap-northeast-1.amazonaws.com",
    signingRegion: "ap-northeast-1",
  },
  "ap-northeast-2": {
    hostname: "api.ecr.ap-northeast-2.amazonaws.com",
    signingRegion: "ap-northeast-2",
  },
  "ap-northeast-3": {
    hostname: "api.ecr.ap-northeast-3.amazonaws.com",
    signingRegion: "ap-northeast-3",
  },
  "ap-south-1": {
    hostname: "api.ecr.ap-south-1.amazonaws.com",
    signingRegion: "ap-south-1",
  },
  "ap-southeast-1": {
    hostname: "api.ecr.ap-southeast-1.amazonaws.com",
    signingRegion: "ap-southeast-1",
  },
  "ap-southeast-2": {
    hostname: "api.ecr.ap-southeast-2.amazonaws.com",
    signingRegion: "ap-southeast-2",
  },
  "ca-central-1": {
    hostname: "api.ecr.ca-central-1.amazonaws.com",
    signingRegion: "ca-central-1",
  },
  "cn-north-1": {
    hostname: "api.ecr.cn-north-1.amazonaws.com.cn",
    signingRegion: "cn-north-1",
  },
  "cn-northwest-1": {
    hostname: "api.ecr.cn-northwest-1.amazonaws.com.cn",
    signingRegion: "cn-northwest-1",
  },
  "eu-central-1": {
    hostname: "api.ecr.eu-central-1.amazonaws.com",
    signingRegion: "eu-central-1",
  },
  "eu-north-1": {
    hostname: "api.ecr.eu-north-1.amazonaws.com",
    signingRegion: "eu-north-1",
  },
  "eu-south-1": {
    hostname: "api.ecr.eu-south-1.amazonaws.com",
    signingRegion: "eu-south-1",
  },
  "eu-west-1": {
    hostname: "api.ecr.eu-west-1.amazonaws.com",
    signingRegion: "eu-west-1",
  },
  "eu-west-2": {
    hostname: "api.ecr.eu-west-2.amazonaws.com",
    signingRegion: "eu-west-2",
  },
  "eu-west-3": {
    hostname: "api.ecr.eu-west-3.amazonaws.com",
    signingRegion: "eu-west-3",
  },
  "fips-dkr-us-east-1": {
    hostname: "ecr-fips.us-east-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "fips-dkr-us-east-2": {
    hostname: "ecr-fips.us-east-2.amazonaws.com",
    signingRegion: "us-east-2",
  },
  "fips-dkr-us-gov-east-1": {
    hostname: "ecr-fips.us-gov-east-1.amazonaws.com",
    signingRegion: "us-gov-east-1",
  },
  "fips-dkr-us-gov-west-1": {
    hostname: "ecr-fips.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "fips-dkr-us-west-1": {
    hostname: "ecr-fips.us-west-1.amazonaws.com",
    signingRegion: "us-west-1",
  },
  "fips-dkr-us-west-2": {
    hostname: "ecr-fips.us-west-2.amazonaws.com",
    signingRegion: "us-west-2",
  },
  "fips-us-east-1": {
    hostname: "ecr-fips.us-east-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "fips-us-east-2": {
    hostname: "ecr-fips.us-east-2.amazonaws.com",
    signingRegion: "us-east-2",
  },
  "fips-us-gov-east-1": {
    hostname: "ecr-fips.us-gov-east-1.amazonaws.com",
    signingRegion: "us-gov-east-1",
  },
  "fips-us-gov-west-1": {
    hostname: "ecr-fips.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "fips-us-west-1": {
    hostname: "ecr-fips.us-west-1.amazonaws.com",
    signingRegion: "us-west-1",
  },
  "fips-us-west-2": {
    hostname: "ecr-fips.us-west-2.amazonaws.com",
    signingRegion: "us-west-2",
  },
  "me-south-1": {
    hostname: "api.ecr.me-south-1.amazonaws.com",
    signingRegion: "me-south-1",
  },
  "sa-east-1": {
    hostname: "api.ecr.sa-east-1.amazonaws.com",
    signingRegion: "sa-east-1",
  },
  "us-east-1": {
    hostname: "api.ecr.us-east-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "us-east-2": {
    hostname: "api.ecr.us-east-2.amazonaws.com",
    signingRegion: "us-east-2",
  },
  "us-gov-east-1": {
    hostname: "api.ecr.us-gov-east-1.amazonaws.com",
    signingRegion: "us-gov-east-1",
  },
  "us-gov-west-1": {
    hostname: "api.ecr.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "us-iso-east-1": {
    hostname: "api.ecr.us-iso-east-1.c2s.ic.gov",
    signingRegion: "us-iso-east-1",
  },
  "us-isob-east-1": {
    hostname: "api.ecr.us-isob-east-1.sc2s.sgov.gov",
    signingRegion: "us-isob-east-1",
  },
  "us-west-1": {
    hostname: "api.ecr.us-west-1.amazonaws.com",
    signingRegion: "us-west-1",
  },
  "us-west-2": {
    hostname: "api.ecr.us-west-2.amazonaws.com",
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
      "fips-dkr-us-east-1",
      "fips-dkr-us-east-2",
      "fips-dkr-us-west-1",
      "fips-dkr-us-west-2",
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
    hostname: "api.ecr.{region}.amazonaws.com",
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    hostname: "api.ecr.{region}.amazonaws.com.cn",
  },
  "aws-iso": {
    regions: ["us-iso-east-1"],
    hostname: "api.ecr.{region}.c2s.ic.gov",
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    hostname: "api.ecr.{region}.sc2s.sgov.gov",
  },
  "aws-us-gov": {
    regions: [
      "fips-dkr-us-gov-east-1",
      "fips-dkr-us-gov-west-1",
      "fips-us-gov-east-1",
      "fips-us-gov-west-1",
      "us-gov-east-1",
      "us-gov-west-1",
    ],
    hostname: "api.ecr.{region}.amazonaws.com",
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (region: string, options?: any) =>
  getRegionInfo(region, {
    ...options,
    signingService: "ecr",
    regionHash,
    partitionHash,
  });
