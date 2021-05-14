import { RegionInfo, RegionInfoProvider } from "@aws-sdk/types";

// Partition default templates
const AWS_TEMPLATE = "iam.{region}.amazonaws.com";
const AWS_CN_TEMPLATE = "iam.{region}.amazonaws.com.cn";
const AWS_ISO_TEMPLATE = "iam.{region}.c2s.ic.gov";
const AWS_ISO_B_TEMPLATE = "iam.{region}.sc2s.sgov.gov";
const AWS_US_GOV_TEMPLATE = "iam.{region}.amazonaws.com";

// Partition regions
const AWS_REGIONS = new Set([
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
]);
const AWS_CN_REGIONS = new Set(["cn-north-1", "cn-northwest-1"]);
const AWS_ISO_REGIONS = new Set(["us-iso-east-1"]);
const AWS_ISO_B_REGIONS = new Set(["us-isob-east-1"]);
const AWS_US_GOV_REGIONS = new Set(["us-gov-east-1", "us-gov-west-1"]);

export const defaultRegionInfoProvider: RegionInfoProvider = (region: string, options?: any) => {
  let regionInfo: RegionInfo | undefined = undefined;
  switch (region) {
    // First, try to match exact region names.
    case "aws-cn-global":
      regionInfo = {
        hostname: "iam.cn-north-1.amazonaws.com.cn",
        partition: "aws-cn",
        signingRegion: "cn-north-1",
      };
      break;
    case "aws-global":
      regionInfo = {
        hostname: "iam.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1",
      };
      break;
    case "aws-iso-b-global":
      regionInfo = {
        hostname: "iam.us-isob-east-1.sc2s.sgov.gov",
        partition: "aws-iso-b",
        signingRegion: "us-isob-east-1",
      };
      break;
    case "aws-iso-global":
      regionInfo = {
        hostname: "iam.us-iso-east-1.c2s.ic.gov",
        partition: "aws-iso",
        signingRegion: "us-iso-east-1",
      };
      break;
    case "aws-us-gov-global":
      regionInfo = {
        hostname: "iam.us-gov.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1",
      };
      break;
    case "iam-fips":
      regionInfo = {
        hostname: "iam-fips.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1",
      };
      break;
    case "iam-govcloud-fips":
      regionInfo = {
        hostname: "iam.us-gov.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1",
      };
      break;
    // Next, try to match partition endpoints.
    default:
      if (AWS_REGIONS.has(region)) {
        return defaultRegionInfoProvider("aws-global");
      }
      if (AWS_CN_REGIONS.has(region)) {
        return defaultRegionInfoProvider("aws-cn-global");
      }
      if (AWS_ISO_REGIONS.has(region)) {
        return defaultRegionInfoProvider("aws-iso-global");
      }
      if (AWS_ISO_B_REGIONS.has(region)) {
        return defaultRegionInfoProvider("aws-iso-b-global");
      }
      if (AWS_US_GOV_REGIONS.has(region)) {
        return defaultRegionInfoProvider("aws-us-gov-global");
      }
      // Finally, assume it's an AWS partition endpoint.
      if (regionInfo === undefined) {
        return defaultRegionInfoProvider("aws-global");
      }
  }
  return Promise.resolve({ signingService: "iam", ...regionInfo });
};
