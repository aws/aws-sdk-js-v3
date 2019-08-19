import { _AggregatorRegionList } from "./_AggregatorRegionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OrganizationAggregationSource: _Structure_ = {
  type: "structure",
  required: ["RoleArn"],
  members: {
    RoleArn: {
      shape: {
        type: "string"
      }
    },
    AwsRegions: {
      shape: _AggregatorRegionList
    },
    AllAwsRegions: {
      shape: {
        type: "boolean"
      }
    }
  }
};
