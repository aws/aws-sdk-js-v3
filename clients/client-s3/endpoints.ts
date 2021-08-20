import { RegionInfo, RegionInfoProvider } from "@aws-sdk/types";

const regionHash: { [key: string]: Partial<RegionInfo> } = {
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
  "af-south-1": { hostname: "s3.af-south-1.amazonaws.com" },
  "ap-east-1": { hostname: "s3.ap-east-1.amazonaws.com" },
  "ap-northeast-1": {
    hostname: "s3.ap-northeast-1.amazonaws.com",
  },
  "ap-northeast-2": {
    hostname: "s3.ap-northeast-2.amazonaws.com",
  },
  "ap-northeast-3": {
    hostname: "s3.ap-northeast-3.amazonaws.com",
  },
  "ap-south-1": { hostname: "s3.ap-south-1.amazonaws.com" },
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
  "cn-north-1": {
    hostname: "s3.cn-north-1.amazonaws.com.cn",
  },
  "cn-northwest-1": {
    hostname: "s3.cn-northwest-1.amazonaws.com.cn",
  },
  "ca-central-1": {
    hostname: "s3.ca-central-1.amazonaws.com",
  },
  "eu-central-1": {
    hostname: "s3.eu-central-1.amazonaws.com",
  },
  "eu-north-1": { hostname: "s3.eu-north-1.amazonaws.com" },
  "eu-south-1": { hostname: "s3.eu-south-1.amazonaws.com" },
  "eu-west-1": { hostname: "s3.eu-west-1.amazonaws.com" },
  "eu-west-2": { hostname: "s3.eu-west-2.amazonaws.com" },
  "eu-west-3": { hostname: "s3.eu-west-3.amazonaws.com" },
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
  "me-south-1": { hostname: "s3.me-south-1.amazonaws.com" },
  "sa-east-1": { hostname: "s3.sa-east-1.amazonaws.com" },
  "s3-external-1": {
    hostname: "s3-external-1.amazonaws.com",

    signingRegion: "us-east-1",
  },
  "us-east-1": { hostname: "s3.us-east-1.amazonaws.com" },
  "us-east-2": { hostname: "s3.us-east-2.amazonaws.com" },
  "us-gov-east-1": {
    hostname: "s3.us-gov-east-1.amazonaws.com",
  },
  "us-gov-west-1": {
    hostname: "s3.us-gov-west-1.amazonaws.com",
  },
  "us-iso-east-1": {
    hostname: "s3.us-iso-east-1.c2s.ic.gov",
  },
  "us-isob-east-1": {
    hostname: "s3.us-isob-east-1.sc2s.sgov.gov",
  },
  "us-west-1": { hostname: "s3.us-west-1.amazonaws.com" },
  "us-west-2": { hostname: "s3.us-west-2.amazonaws.com" },
};

const partitionHash: { [key: string]: { regions: string[]; hostname: string } } = {
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
    hostname: "s3.{region}.amazonaws.com",
  },
  "aws-cn": { regions: ["cn-north-1", "cn-northwest-1"], hostname: "s3.{region}.amazonaws.com.cn" },
  "aws-iso": { regions: ["us-iso-east-1"], hostname: "s3.{region}.c2s.ic.gov" },
  "aws-iso-b": { regions: ["us-isob-east-1"], hostname: "s3.{region}.sc2s.sgov.gov" },
  "aws-us-gov": { regions: ["us-gov-east-1", "us-gov-west-1"], hostname: "s3.{region}.amazonaws.com" },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (region: string, options?: any) => ({
  signingService: "s3",
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
  regionHash[region]?.hostname ?? partitionHash[getResolvedPartition(region)].hostname.replace("{region}", region);

const getResolvedPartition = (region: string) =>
  Object.keys(partitionHash).find((key) => partitionHash[key].regions.includes(region)) ?? "aws";
