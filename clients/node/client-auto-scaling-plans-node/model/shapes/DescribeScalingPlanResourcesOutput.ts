import { _ScalingPlanResources } from "./_ScalingPlanResources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScalingPlanResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ScalingPlanResources: {
      shape: _ScalingPlanResources
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
