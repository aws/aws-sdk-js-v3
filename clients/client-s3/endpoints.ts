import { RegionInfo, RegionInfoProvider } from "@aws-sdk/types";

const regionHash: { [key: string]: Partial<RegionInfo> } = {
  "accesspoint-af-south-1": { hostname: "s3-accesspoint.af-south-1.amazonaws.com", partition: "aws" },
  "accesspoint-ap-east-1": { hostname: "s3-accesspoint.ap-east-1.amazonaws.com", partition: "aws" },
  "accesspoint-ap-northeast-1": { hostname: "s3-accesspoint.ap-northeast-1.amazonaws.com", partition: "aws" },
  "accesspoint-ap-northeast-2": { hostname: "s3-accesspoint.ap-northeast-2.amazonaws.com", partition: "aws" },
  "accesspoint-ap-northeast-3": { hostname: "s3-accesspoint.ap-northeast-3.amazonaws.com", partition: "aws" },
  "accesspoint-ap-south-1": { hostname: "s3-accesspoint.ap-south-1.amazonaws.com", partition: "aws" },
  "accesspoint-ap-southeast-1": { hostname: "s3-accesspoint.ap-southeast-1.amazonaws.com", partition: "aws" },
  "accesspoint-ap-southeast-2": { hostname: "s3-accesspoint.ap-southeast-2.amazonaws.com", partition: "aws" },
  "accesspoint-ca-central-1": { hostname: "s3-accesspoint.ca-central-1.amazonaws.com", partition: "aws" },
  "accesspoint-cn-north-1": { hostname: "s3-accesspoint.cn-north-1.amazonaws.com.cn", partition: "aws-cn" },
  "accesspoint-cn-northwest-1": { hostname: "s3-accesspoint.cn-northwest-1.amazonaws.com.cn", partition: "aws-cn" },
  "accesspoint-eu-central-1": { hostname: "s3-accesspoint.eu-central-1.amazonaws.com", partition: "aws" },
  "accesspoint-eu-north-1": { hostname: "s3-accesspoint.eu-north-1.amazonaws.com", partition: "aws" },
  "accesspoint-eu-south-1": { hostname: "s3-accesspoint.eu-south-1.amazonaws.com", partition: "aws" },
  "accesspoint-eu-west-1": { hostname: "s3-accesspoint.eu-west-1.amazonaws.com", partition: "aws" },
  "accesspoint-eu-west-2": { hostname: "s3-accesspoint.eu-west-2.amazonaws.com", partition: "aws" },
  "accesspoint-eu-west-3": { hostname: "s3-accesspoint.eu-west-3.amazonaws.com", partition: "aws" },
  "accesspoint-me-south-1": { hostname: "s3-accesspoint.me-south-1.amazonaws.com", partition: "aws" },
  "accesspoint-sa-east-1": { hostname: "s3-accesspoint.sa-east-1.amazonaws.com", partition: "aws" },
  "accesspoint-us-east-1": { hostname: "s3-accesspoint.us-east-1.amazonaws.com", partition: "aws" },
  "accesspoint-us-east-2": { hostname: "s3-accesspoint.us-east-2.amazonaws.com", partition: "aws" },
  "accesspoint-us-gov-east-1": { hostname: "s3-accesspoint.us-gov-east-1.amazonaws.com", partition: "aws-us-gov" },
  "accesspoint-us-gov-west-1": { hostname: "s3-accesspoint.us-gov-west-1.amazonaws.com", partition: "aws-us-gov" },
  "accesspoint-us-west-1": { hostname: "s3-accesspoint.us-west-1.amazonaws.com", partition: "aws" },
  "accesspoint-us-west-2": { hostname: "s3-accesspoint.us-west-2.amazonaws.com", partition: "aws" },
  "af-south-1": { hostname: "s3.af-south-1.amazonaws.com", partition: "aws" },
  "ap-east-1": { hostname: "s3.ap-east-1.amazonaws.com", partition: "aws" },
  "ap-northeast-1": { hostname: "s3.ap-northeast-1.amazonaws.com", partition: "aws" },
  "ap-northeast-2": { hostname: "s3.ap-northeast-2.amazonaws.com", partition: "aws" },
  "ap-northeast-3": { hostname: "s3.ap-northeast-3.amazonaws.com", partition: "aws" },
  "ap-south-1": { hostname: "s3.ap-south-1.amazonaws.com", partition: "aws" },
  "ap-southeast-1": { hostname: "s3.ap-southeast-1.amazonaws.com", partition: "aws" },
  "ap-southeast-2": { hostname: "s3.ap-southeast-2.amazonaws.com", partition: "aws" },
  "aws-global": { hostname: "s3.amazonaws.com", partition: "aws", signingRegion: "us-east-1" },
  "cn-north-1": { hostname: "s3.cn-north-1.amazonaws.com.cn", partition: "aws-cn" },
  "cn-northwest-1": { hostname: "s3.cn-northwest-1.amazonaws.com.cn", partition: "aws-cn" },
  "ca-central-1": { hostname: "s3.ca-central-1.amazonaws.com", partition: "aws" },
  "eu-central-1": { hostname: "s3.eu-central-1.amazonaws.com", partition: "aws" },
  "eu-north-1": { hostname: "s3.eu-north-1.amazonaws.com", partition: "aws" },
  "eu-south-1": { hostname: "s3.eu-south-1.amazonaws.com", partition: "aws" },
  "eu-west-1": { hostname: "s3.eu-west-1.amazonaws.com", partition: "aws" },
  "eu-west-2": { hostname: "s3.eu-west-2.amazonaws.com", partition: "aws" },
  "eu-west-3": { hostname: "s3.eu-west-3.amazonaws.com", partition: "aws" },
  "fips-accesspoint-ca-central-1": { hostname: "s3-accesspoint-fips.ca-central-1.amazonaws.com", partition: "aws" },
  "fips-accesspoint-us-east-1": { hostname: "s3-accesspoint-fips.us-east-1.amazonaws.com", partition: "aws" },
  "fips-accesspoint-us-east-2": { hostname: "s3-accesspoint-fips.us-east-2.amazonaws.com", partition: "aws" },
  "fips-accesspoint-us-gov-east-1": {
    hostname: "s3-accesspoint-fips.us-gov-east-1.amazonaws.com",
    partition: "aws-us-gov",
  },
  "fips-accesspoint-us-gov-west-1": {
    hostname: "s3-accesspoint-fips.us-gov-west-1.amazonaws.com",
    partition: "aws-us-gov",
  },
  "fips-accesspoint-us-west-1": { hostname: "s3-accesspoint-fips.us-west-1.amazonaws.com", partition: "aws" },
  "fips-accesspoint-us-west-2": { hostname: "s3-accesspoint-fips.us-west-2.amazonaws.com", partition: "aws" },
  "fips-us-gov-west-1": {
    hostname: "s3-fips.us-gov-west-1.amazonaws.com",
    partition: "aws-us-gov",
    signingRegion: "us-gov-west-1",
  },
  "me-south-1": { hostname: "s3.me-south-1.amazonaws.com", partition: "aws" },
  "sa-east-1": { hostname: "s3.sa-east-1.amazonaws.com", partition: "aws" },
  "s3-external-1": { hostname: "s3-external-1.amazonaws.com", partition: "aws", signingRegion: "us-east-1" },
  "us-east-1": { hostname: "s3.us-east-1.amazonaws.com", partition: "aws" },
  "us-east-2": { hostname: "s3.us-east-2.amazonaws.com", partition: "aws" },
  "us-gov-east-1": { hostname: "s3.us-gov-east-1.amazonaws.com", partition: "aws-us-gov" },
  "us-gov-west-1": { hostname: "s3.us-gov-west-1.amazonaws.com", partition: "aws-us-gov" },
  "us-iso-east-1": { hostname: "s3.us-iso-east-1.c2s.ic.gov", partition: "aws-iso" },
  "us-isob-east-1": { hostname: "s3.us-isob-east-1.sc2s.sgov.gov", partition: "aws-iso-b" },
  "us-west-1": { hostname: "s3.us-west-1.amazonaws.com", partition: "aws" },
  "us-west-2": { hostname: "s3.us-west-2.amazonaws.com", partition: "aws" },
};

const partitionTemplatesHash: { [key: string]: { hostname: string } } = {
  aws: { hostname: "s3.{region}.amazonaws.com" },
  "aws-cn": { hostname: "s3.{region}.amazonaws.com.cn" },
  "aws-iso": { hostname: "s3.{region}.c2s.ic.gov" },
  "aws-iso-b": { hostname: "s3.{region}.sc2s.sgov.gov" },
  "aws-us-gov": { hostname: "s3.{region}.amazonaws.com" },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (region: string, options?: any) => ({
  signingService: "{service}",
  hostname: getResolvedHostName(region),
  partition: getResolvedPartition(region),
  ...(regionHash[region]?.signingRegion && {
    signingRegion: regionHash[region].signingRegion,
  }),
  ...(regionHash[region]?.signingService && {
    signingService: regionHash[region].signingService,
  }),
});

const getResolvedHostName = (region: string) =>
  regionHash[region]?.hostname ??
  partitionTemplatesHash[getResolvedPartition(region)].hostname.replace("{region}", region);

const getResolvedPartition = (region: string) => regionHash[region]?.partition ?? "aws";
