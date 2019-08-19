import { _AutoScalingPolicyStateChangeReason } from "./_AutoScalingPolicyStateChangeReason";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AutoScalingPolicyStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    State: {
      shape: {
        type: "string"
      }
    },
    StateChangeReason: {
      shape: _AutoScalingPolicyStateChangeReason
    }
  }
};
