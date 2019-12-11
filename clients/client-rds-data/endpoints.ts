import { RegionInfoProvider } from "@aws-sdk/types";

// Partition default templates
const AWS_TEMPLATE = "rds-data.{region}.amazonaws.com";
const AWS_CN_TEMPLATE = "rds-data.{region}.amazonaws.com.cn";
const AWS_ISO_TEMPLATE = "rds-data.{region}.c2s.ic.gov";
const AWS_ISO_B_TEMPLATE = "rds-data.{region}.sc2s.sgov.gov";
const AWS_US_GOV_TEMPLATE = "rds-data.{region}.amazonaws.com";

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
  "us-west-2"
]);
const AWS_CN_REGIONS = new Set(["cn-north-1", "cn-northwest-1"]);
const AWS_ISO_REGIONS = new Set(["us-iso-east-1"]);
const AWS_ISO_B_REGIONS = new Set(["us-isob-east-1"]);
const AWS_US_GOV_REGIONS = new Set(["us-gov-west-1", "us-gov-east-1"]);

export let defaultRegionInfoProvider: RegionInfoProvider;
defaultRegionInfoProvider = function(region: string, options?: any) {
  switch (region) {
    // First, try to match exact region names.
    // Next, try to match partition endpoints.
    default:
      if (region in AWS_REGIONS) {
        return {
          hostname: AWS_TEMPLATE.replace("{region}", region)
        };
      }
      if (region in AWS_CN_REGIONS) {
        return {
          hostname: AWS_CN_TEMPLATE.replace("{region}", region)
        };
      }
      if (region in AWS_ISO_REGIONS) {
        return {
          hostname: AWS_ISO_TEMPLATE.replace("{region}", region)
        };
      }
      if (region in AWS_ISO_B_REGIONS) {
        return {
          hostname: AWS_ISO_B_TEMPLATE.replace("{region}", region)
        };
      }
      if (region in AWS_US_GOV_REGIONS) {
        return {
          hostname: AWS_US_GOV_TEMPLATE.replace("{region}", region)
        };
      }
      // Finally, assume it's an AWS partition endpoint.
      return {
        hostname: AWS_TEMPLATE.replace("{region}", region)
      };
  }
};
