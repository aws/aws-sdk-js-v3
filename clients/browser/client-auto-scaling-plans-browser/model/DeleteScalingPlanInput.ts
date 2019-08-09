import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteScalingPlanInput: _Structure_ = {
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
    }
  }
};
