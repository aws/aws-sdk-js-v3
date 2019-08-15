import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SimpleScalingPolicyConfiguration: _Structure_ = {
  type: "structure",
  required: ["ScalingAdjustment"],
  members: {
    AdjustmentType: {
      shape: {
        type: "string"
      }
    },
    ScalingAdjustment: {
      shape: {
        type: "integer"
      }
    },
    CoolDown: {
      shape: {
        type: "integer"
      }
    }
  }
};
