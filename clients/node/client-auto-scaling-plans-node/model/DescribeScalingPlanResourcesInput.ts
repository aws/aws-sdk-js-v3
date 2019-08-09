import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScalingPlanResourcesInput: _Structure_ = {
  type: "structure",
  required: ["ScalingPlanName", "ScalingPlanVersion"],
  members: {
    ScalingPlanName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScalingPlanVersion: {
      shape: {
        type: "integer"
      }
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
