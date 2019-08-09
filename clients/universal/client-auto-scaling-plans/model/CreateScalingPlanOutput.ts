import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateScalingPlanOutput: _Structure_ = {
  type: "structure",
  required: ["ScalingPlanVersion"],
  members: {
    ScalingPlanVersion: {
      shape: {
        type: "integer"
      }
    }
  }
};
