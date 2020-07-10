import { RegionInfo, RegionInfoProvider } from "@aws-sdk/types";

// Partition default templates
const AWS_TEMPLATE = "cloudtrail.{region}.amazonaws.com";
const AWS_CN_TEMPLATE = "cloudtrail.{region}.amazonaws.com.cn";
const AWS_ISO_TEMPLATE = "cloudtrail.{region}.c2s.ic.gov";
const AWS_ISO_B_TEMPLATE = "cloudtrail.{region}.sc2s.sgov.gov";
const AWS_US_GOV_TEMPLATE = "cloudtrail.{region}.amazonaws.com";

// Partition regions
const AWS_REGIONS = new Set([
  "ap-south-1",
  "eu-north-1",
  "eu-west-3",
  "eu-west-2",
  "eu-west-1",
  "ap-northeast-2",
  "ap-northeast-1",
  "me-south-1",
  "ca-central-1",
  "sa-east-1",
  "ap-east-1",
  "ap-southeast-1",
  "ap-southeast-2",
  "eu-central-1",
  "us-east-1",
  "us-east-2",
  "us-west-1",
  "us-west-2",
]);
const AWS_CN_REGIONS = new Set(["cn-north-1", "cn-northwest-1"]);
const AWS_ISO_REGIONS = new Set(["us-iso-east-1"]);
const AWS_ISO_B_REGIONS = new Set(["us-isob-east-1"]);
const AWS_US_GOV_REGIONS = new Set(["us-gov-west-1", "us-gov-east-1"]);

export const defaultRegionInfoProvider: RegionInfoProvider = (region: string, options?: any) => {
  let regionInfo: RegionInfo | undefined = undefined;
  switch (region) {
    // First, try to match exact region names.
    case "ap-east-1":
      regionInfo = {
        hostname: "cloudtrail.ap-east-1.amazonaws.com",
      };
      break;
    case "ap-northeast-1":
      regionInfo = {
        hostname: "cloudtrail.ap-northeast-1.amazonaws.com",
      };
      break;
    case "ap-northeast-2":
      regionInfo = {
        hostname: "cloudtrail.ap-northeast-2.amazonaws.com",
      };
      break;
    case "ap-south-1":
      regionInfo = {
        hostname: "cloudtrail.ap-south-1.amazonaws.com",
      };
      break;
    case "ap-southeast-1":
      regionInfo = {
        hostname: "cloudtrail.ap-southeast-1.amazonaws.com",
      };
      break;
    case "ap-southeast-2":
      regionInfo = {
        hostname: "cloudtrail.ap-southeast-2.amazonaws.com",
      };
      break;
    case "ca-central-1":
      regionInfo = {
        hostname: "cloudtrail.ca-central-1.amazonaws.com",
      };
      break;
    case "cn-north-1":
      regionInfo = {
        hostname: "cloudtrail.cn-north-1.amazonaws.com.cn",
      };
      break;
    case "cn-northwest-1":
      regionInfo = {
        hostname: "cloudtrail.cn-northwest-1.amazonaws.com.cn",
      };
      break;
    case "eu-central-1":
      regionInfo = {
        hostname: "cloudtrail.eu-central-1.amazonaws.com",
      };
      break;
    case "eu-north-1":
      regionInfo = {
        hostname: "cloudtrail.eu-north-1.amazonaws.com",
      };
      break;
    case "eu-west-1":
      regionInfo = {
        hostname: "cloudtrail.eu-west-1.amazonaws.com",
      };
      break;
    case "eu-west-2":
      regionInfo = {
        hostname: "cloudtrail.eu-west-2.amazonaws.com",
      };
      break;
    case "eu-west-3":
      regionInfo = {
        hostname: "cloudtrail.eu-west-3.amazonaws.com",
      };
      break;
    case "me-south-1":
      regionInfo = {
        hostname: "cloudtrail.me-south-1.amazonaws.com",
      };
      break;
    case "sa-east-1":
      regionInfo = {
        hostname: "cloudtrail.sa-east-1.amazonaws.com",
      };
      break;
    case "us-east-1":
      regionInfo = {
        hostname: "cloudtrail.us-east-1.amazonaws.com",
      };
      break;
    case "us-east-2":
      regionInfo = {
        hostname: "cloudtrail.us-east-2.amazonaws.com",
      };
      break;
    case "us-gov-east-1":
      regionInfo = {
        hostname: "cloudtrail.us-gov-east-1.amazonaws.com",
      };
      break;
    case "us-gov-west-1":
      regionInfo = {
        hostname: "cloudtrail.us-gov-west-1.amazonaws.com",
      };
      break;
    case "us-iso-east-1":
      regionInfo = {
        hostname: "cloudtrail.us-iso-east-1.c2s.ic.gov",
      };
      break;
    case "us-isob-east-1":
      regionInfo = {
        hostname: "cloudtrail.us-isob-east-1.sc2s.sgov.gov",
      };
      break;
    case "us-west-1":
      regionInfo = {
        hostname: "cloudtrail.us-west-1.amazonaws.com",
      };
      break;
    case "us-west-2":
      regionInfo = {
        hostname: "cloudtrail.us-west-2.amazonaws.com",
      };
      break;
    // Next, try to match partition endpoints.
    default:
      if (AWS_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region),
        };
      }
      if (AWS_CN_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_CN_TEMPLATE.replace("{region}", region),
        };
      }
      if (AWS_ISO_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_TEMPLATE.replace("{region}", region),
        };
      }
      if (AWS_ISO_B_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_B_TEMPLATE.replace("{region}", region),
        };
      }
      if (AWS_US_GOV_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_US_GOV_TEMPLATE.replace("{region}", region),
        };
      }
      // Finally, assume it's an AWS partition endpoint.
      if (regionInfo === undefined) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region),
        };
      }
  }
  return Promise.resolve(regionInfo);
};
