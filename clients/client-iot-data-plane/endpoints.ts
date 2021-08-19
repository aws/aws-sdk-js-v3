import { RegionInfo, RegionInfoProvider } from "@aws-sdk/types";

// Partition default templates
const AWS_TEMPLATE = "data.iot.{region}.amazonaws.com";
const AWS_CN_TEMPLATE = "data.iot.{region}.amazonaws.com.cn";
const AWS_ISO_TEMPLATE = "data.iot.{region}.c2s.ic.gov";
const AWS_ISO_B_TEMPLATE = "data.iot.{region}.sc2s.sgov.gov";
const AWS_US_GOV_TEMPLATE = "data.iot.{region}.amazonaws.com";

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
    case "ap-east-1":
      regionInfo = {
        hostname: "data.iot.ap-east-1.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "ap-northeast-1":
      regionInfo = {
        hostname: "data.iot.ap-northeast-1.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "ap-northeast-2":
      regionInfo = {
        hostname: "data.iot.ap-northeast-2.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "ap-south-1":
      regionInfo = {
        hostname: "data.iot.ap-south-1.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "ap-southeast-1":
      regionInfo = {
        hostname: "data.iot.ap-southeast-1.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "ap-southeast-2":
      regionInfo = {
        hostname: "data.iot.ap-southeast-2.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "ca-central-1":
      regionInfo = {
        hostname: "data.iot.ca-central-1.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "cn-north-1":
      regionInfo = {
        hostname: "data.iot.cn-north-1.amazonaws.com.cn",
        partition: "aws-cn",
        signingService: "iotdata",
      };
      break;
    case "cn-northwest-1":
      regionInfo = {
        hostname: "data.iot.cn-northwest-1.amazonaws.com.cn",
        partition: "aws-cn",
        signingService: "iotdata",
      };
      break;
    case "eu-central-1":
      regionInfo = {
        hostname: "data.iot.eu-central-1.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "eu-north-1":
      regionInfo = {
        hostname: "data.iot.eu-north-1.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "eu-west-1":
      regionInfo = {
        hostname: "data.iot.eu-west-1.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "eu-west-2":
      regionInfo = {
        hostname: "data.iot.eu-west-2.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "eu-west-3":
      regionInfo = {
        hostname: "data.iot.eu-west-3.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "fips-ca-central-1":
      regionInfo = {
        hostname: "data.iot-fips.ca-central-1.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "fips-us-east-1":
      regionInfo = {
        hostname: "data.iot-fips.us-east-1.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "fips-us-east-2":
      regionInfo = {
        hostname: "data.iot-fips.us-east-2.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "fips-us-gov-east-1":
      regionInfo = {
        hostname: "data.iot-fips.us-gov-east-1.amazonaws.com",
        partition: "aws-us-gov",
        signingService: "iotdata",
      };
      break;
    case "fips-us-gov-west-1":
      regionInfo = {
        hostname: "data.iot-fips.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingService: "iotdata",
      };
      break;
    case "fips-us-west-1":
      regionInfo = {
        hostname: "data.iot-fips.us-west-1.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "fips-us-west-2":
      regionInfo = {
        hostname: "data.iot-fips.us-west-2.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "me-south-1":
      regionInfo = {
        hostname: "data.iot.me-south-1.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "sa-east-1":
      regionInfo = {
        hostname: "data.iot.sa-east-1.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "us-east-1":
      regionInfo = {
        hostname: "data.iot.us-east-1.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "us-east-2":
      regionInfo = {
        hostname: "data.iot.us-east-2.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "us-gov-east-1":
      regionInfo = {
        hostname: "data.iot.us-gov-east-1.amazonaws.com",
        partition: "aws-us-gov",
        signingService: "iotdata",
      };
      break;
    case "us-gov-west-1":
      regionInfo = {
        hostname: "data.iot.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingService: "iotdata",
      };
      break;
    case "us-west-1":
      regionInfo = {
        hostname: "data.iot.us-west-1.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    case "us-west-2":
      regionInfo = {
        hostname: "data.iot.us-west-2.amazonaws.com",
        partition: "aws",
        signingService: "iotdata",
      };
      break;
    // Next, try to match partition endpoints.
    default:
      if (AWS_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region),
          partition: "aws",
          signingService: "iotdata",
        };
      }
      if (AWS_CN_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_CN_TEMPLATE.replace("{region}", region),
          partition: "aws-cn",
          signingService: "iotdata",
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
          signingService: "iotdata",
        };
      }
      // Finally, assume it's an AWS partition endpoint.
      if (regionInfo === undefined) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region),
          partition: "aws",
          signingService: "iotdata",
        };
      }
  }
  return Promise.resolve({ signingService: "iotdata", ...regionInfo });
};
