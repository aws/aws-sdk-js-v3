import { RegionInfo, RegionInfoProvider } from "@aws-sdk/types";

// Partition default templates
const AWS_TEMPLATE = "waf-regional.{region}.amazonaws.com";
const AWS_CN_TEMPLATE = "waf-regional.{region}.amazonaws.com.cn";
const AWS_ISO_TEMPLATE = "waf-regional.{region}.c2s.ic.gov";
const AWS_ISO_B_TEMPLATE = "waf-regional.{region}.sc2s.sgov.gov";
const AWS_US_GOV_TEMPLATE = "waf-regional.{region}.amazonaws.com";

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
    case "af-south-1":
      regionInfo = {
        hostname: "waf-regional.af-south-1.amazonaws.com",
        partition: "aws",
        signingRegion: "af-south-1",
      };
      break;
    case "ap-east-1":
      regionInfo = {
        hostname: "waf-regional.ap-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "ap-east-1",
      };
      break;
    case "ap-northeast-1":
      regionInfo = {
        hostname: "waf-regional.ap-northeast-1.amazonaws.com",
        partition: "aws",
        signingRegion: "ap-northeast-1",
      };
      break;
    case "ap-northeast-2":
      regionInfo = {
        hostname: "waf-regional.ap-northeast-2.amazonaws.com",
        partition: "aws",
        signingRegion: "ap-northeast-2",
      };
      break;
    case "ap-northeast-3":
      regionInfo = {
        hostname: "waf-regional.ap-northeast-3.amazonaws.com",
        partition: "aws",
        signingRegion: "ap-northeast-3",
      };
      break;
    case "ap-south-1":
      regionInfo = {
        hostname: "waf-regional.ap-south-1.amazonaws.com",
        partition: "aws",
        signingRegion: "ap-south-1",
      };
      break;
    case "ap-southeast-1":
      regionInfo = {
        hostname: "waf-regional.ap-southeast-1.amazonaws.com",
        partition: "aws",
        signingRegion: "ap-southeast-1",
      };
      break;
    case "ap-southeast-2":
      regionInfo = {
        hostname: "waf-regional.ap-southeast-2.amazonaws.com",
        partition: "aws",
        signingRegion: "ap-southeast-2",
      };
      break;
    case "ca-central-1":
      regionInfo = {
        hostname: "waf-regional.ca-central-1.amazonaws.com",
        partition: "aws",
        signingRegion: "ca-central-1",
      };
      break;
    case "cn-north-1":
      regionInfo = {
        hostname: "waf-regional.cn-north-1.amazonaws.com.cn",
        partition: "aws-cn",
        signingRegion: "cn-north-1",
      };
      break;
    case "cn-northwest-1":
      regionInfo = {
        hostname: "waf-regional.cn-northwest-1.amazonaws.com.cn",
        partition: "aws-cn",
        signingRegion: "cn-northwest-1",
      };
      break;
    case "eu-central-1":
      regionInfo = {
        hostname: "waf-regional.eu-central-1.amazonaws.com",
        partition: "aws",
        signingRegion: "eu-central-1",
      };
      break;
    case "eu-north-1":
      regionInfo = {
        hostname: "waf-regional.eu-north-1.amazonaws.com",
        partition: "aws",
        signingRegion: "eu-north-1",
      };
      break;
    case "eu-south-1":
      regionInfo = {
        hostname: "waf-regional.eu-south-1.amazonaws.com",
        partition: "aws",
        signingRegion: "eu-south-1",
      };
      break;
    case "eu-west-1":
      regionInfo = {
        hostname: "waf-regional.eu-west-1.amazonaws.com",
        partition: "aws",
        signingRegion: "eu-west-1",
      };
      break;
    case "eu-west-2":
      regionInfo = {
        hostname: "waf-regional.eu-west-2.amazonaws.com",
        partition: "aws",
        signingRegion: "eu-west-2",
      };
      break;
    case "eu-west-3":
      regionInfo = {
        hostname: "waf-regional.eu-west-3.amazonaws.com",
        partition: "aws",
        signingRegion: "eu-west-3",
      };
      break;
    case "fips-af-south-1":
      regionInfo = {
        hostname: "waf-regional-fips.af-south-1.amazonaws.com",
        partition: "aws",
        signingRegion: "af-south-1",
      };
      break;
    case "fips-ap-east-1":
      regionInfo = {
        hostname: "waf-regional-fips.ap-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "ap-east-1",
      };
      break;
    case "fips-ap-northeast-1":
      regionInfo = {
        hostname: "waf-regional-fips.ap-northeast-1.amazonaws.com",
        partition: "aws",
        signingRegion: "ap-northeast-1",
      };
      break;
    case "fips-ap-northeast-2":
      regionInfo = {
        hostname: "waf-regional-fips.ap-northeast-2.amazonaws.com",
        partition: "aws",
        signingRegion: "ap-northeast-2",
      };
      break;
    case "fips-ap-northeast-3":
      regionInfo = {
        hostname: "waf-regional-fips.ap-northeast-3.amazonaws.com",
        partition: "aws",
        signingRegion: "ap-northeast-3",
      };
      break;
    case "fips-ap-south-1":
      regionInfo = {
        hostname: "waf-regional-fips.ap-south-1.amazonaws.com",
        partition: "aws",
        signingRegion: "ap-south-1",
      };
      break;
    case "fips-ap-southeast-1":
      regionInfo = {
        hostname: "waf-regional-fips.ap-southeast-1.amazonaws.com",
        partition: "aws",
        signingRegion: "ap-southeast-1",
      };
      break;
    case "fips-ap-southeast-2":
      regionInfo = {
        hostname: "waf-regional-fips.ap-southeast-2.amazonaws.com",
        partition: "aws",
        signingRegion: "ap-southeast-2",
      };
      break;
    case "fips-ca-central-1":
      regionInfo = {
        hostname: "waf-regional-fips.ca-central-1.amazonaws.com",
        partition: "aws",
        signingRegion: "ca-central-1",
      };
      break;
    case "fips-cn-north-1":
      regionInfo = {
        hostname: "waf-regional-fips.cn-north-1.amazonaws.com.cn",
        partition: "aws-cn",
        signingRegion: "cn-north-1",
      };
      break;
    case "fips-cn-northwest-1":
      regionInfo = {
        hostname: "waf-regional-fips.cn-northwest-1.amazonaws.com.cn",
        partition: "aws-cn",
        signingRegion: "cn-northwest-1",
      };
      break;
    case "fips-eu-central-1":
      regionInfo = {
        hostname: "waf-regional-fips.eu-central-1.amazonaws.com",
        partition: "aws",
        signingRegion: "eu-central-1",
      };
      break;
    case "fips-eu-north-1":
      regionInfo = {
        hostname: "waf-regional-fips.eu-north-1.amazonaws.com",
        partition: "aws",
        signingRegion: "eu-north-1",
      };
      break;
    case "fips-eu-south-1":
      regionInfo = {
        hostname: "waf-regional-fips.eu-south-1.amazonaws.com",
        partition: "aws",
        signingRegion: "eu-south-1",
      };
      break;
    case "fips-eu-west-1":
      regionInfo = {
        hostname: "waf-regional-fips.eu-west-1.amazonaws.com",
        partition: "aws",
        signingRegion: "eu-west-1",
      };
      break;
    case "fips-eu-west-2":
      regionInfo = {
        hostname: "waf-regional-fips.eu-west-2.amazonaws.com",
        partition: "aws",
        signingRegion: "eu-west-2",
      };
      break;
    case "fips-eu-west-3":
      regionInfo = {
        hostname: "waf-regional-fips.eu-west-3.amazonaws.com",
        partition: "aws",
        signingRegion: "eu-west-3",
      };
      break;
    case "fips-me-south-1":
      regionInfo = {
        hostname: "waf-regional-fips.me-south-1.amazonaws.com",
        partition: "aws",
        signingRegion: "me-south-1",
      };
      break;
    case "fips-sa-east-1":
      regionInfo = {
        hostname: "waf-regional-fips.sa-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "sa-east-1",
      };
      break;
    case "fips-us-east-1":
      regionInfo = {
        hostname: "waf-regional-fips.us-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1",
      };
      break;
    case "fips-us-east-2":
      regionInfo = {
        hostname: "waf-regional-fips.us-east-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-2",
      };
      break;
    case "fips-us-gov-east-1":
      regionInfo = {
        hostname: "waf-regional-fips.us-gov-east-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-east-1",
      };
      break;
    case "fips-us-gov-west-1":
      regionInfo = {
        hostname: "waf-regional-fips.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1",
      };
      break;
    case "fips-us-west-1":
      regionInfo = {
        hostname: "waf-regional-fips.us-west-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-1",
      };
      break;
    case "fips-us-west-2":
      regionInfo = {
        hostname: "waf-regional-fips.us-west-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-2",
      };
      break;
    case "me-south-1":
      regionInfo = {
        hostname: "waf-regional.me-south-1.amazonaws.com",
        partition: "aws",
        signingRegion: "me-south-1",
      };
      break;
    case "sa-east-1":
      regionInfo = {
        hostname: "waf-regional.sa-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "sa-east-1",
      };
      break;
    case "us-east-1":
      regionInfo = {
        hostname: "waf-regional.us-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1",
      };
      break;
    case "us-east-2":
      regionInfo = {
        hostname: "waf-regional.us-east-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-2",
      };
      break;
    case "us-gov-east-1":
      regionInfo = {
        hostname: "waf-regional.us-gov-east-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-east-1",
      };
      break;
    case "us-gov-west-1":
      regionInfo = {
        hostname: "waf-regional.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1",
      };
      break;
    case "us-west-1":
      regionInfo = {
        hostname: "waf-regional.us-west-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-1",
      };
      break;
    case "us-west-2":
      regionInfo = {
        hostname: "waf-regional.us-west-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-2",
      };
      break;
    // Next, try to match partition endpoints.
    default:
      if (AWS_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region),
          partition: "aws",
        };
      }
      if (AWS_CN_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_CN_TEMPLATE.replace("{region}", region),
          partition: "aws-cn",
        };
      }
      if (AWS_ISO_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_TEMPLATE.replace("{region}", region),
          partition: "aws-iso",
        };
      }
      if (AWS_ISO_B_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_B_TEMPLATE.replace("{region}", region),
          partition: "aws-iso-b",
        };
      }
      if (AWS_US_GOV_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_US_GOV_TEMPLATE.replace("{region}", region),
          partition: "aws-us-gov",
        };
      }
      // Finally, assume it's an AWS partition endpoint.
      if (regionInfo === undefined) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region),
          partition: "aws",
        };
      }
  }
  return Promise.resolve({ signingService: "waf-regional", ...regionInfo });
};
