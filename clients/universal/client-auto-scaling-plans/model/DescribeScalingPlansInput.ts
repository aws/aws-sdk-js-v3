import { _ScalingPlanNames } from "./_ScalingPlanNames";
import { _ApplicationSources } from "./_ApplicationSources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScalingPlansInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ScalingPlanNames: {
      shape: _ScalingPlanNames
    },
    ScalingPlanVersion: {
      shape: {
        type: "integer"
      }
    },
    ApplicationSources: {
      shape: _ApplicationSources
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
