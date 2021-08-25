import { PartitionHash, RegionHash, getRegionInfo } from "@aws-sdk/config-resolver";
import { RegionInfoProvider } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "dataplane-us-gov-east-1": {
    hostname: "greengrass-ats.iot.us-gov-east-1.amazonaws.com",
    signingRegion: "us-gov-east-1",
  },
  "dataplane-us-gov-west-1": {
    hostname: "greengrass-ats.iot.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "fips-us-gov-east-1": {
    hostname: "greengrass-fips.us-gov-east-1.amazonaws.com",
    signingRegion: "us-gov-east-1",
  },
  "us-gov-east-1": {
    hostname: "greengrass.us-gov-east-1.amazonaws.com",
    signingRegion: "us-gov-east-1",
  },
  "us-gov-west-1": {
    hostname: "greengrass.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
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
    hostname: "greengrass.{region}.amazonaws.com",
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    hostname: "greengrass.{region}.amazonaws.com.cn",
  },
  "aws-iso": {
    regions: ["us-iso-east-1"],
    hostname: "greengrass.{region}.c2s.ic.gov",
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    hostname: "greengrass.{region}.sc2s.sgov.gov",
  },
  "aws-us-gov": {
    regions: [
      "dataplane-us-gov-east-1",
      "dataplane-us-gov-west-1",
      "fips-us-gov-east-1",
      "us-gov-east-1",
      "us-gov-west-1",
    ],
    hostname: "greengrass.{region}.amazonaws.com",
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (region: string, options?: any) =>
  getRegionInfo(region, {
    ...options,
    signingService: "greengrass",
    regionHash,
    partitionHash,
  });
