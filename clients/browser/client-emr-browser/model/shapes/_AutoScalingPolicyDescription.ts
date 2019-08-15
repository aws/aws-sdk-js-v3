import { _AutoScalingPolicyStatus } from "./_AutoScalingPolicyStatus";
import { _ScalingConstraints } from "./_ScalingConstraints";
import { _ScalingRuleList } from "./_ScalingRuleList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AutoScalingPolicyDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: _AutoScalingPolicyStatus
    },
    Constraints: {
      shape: _ScalingConstraints
    },
    Rules: {
      shape: _ScalingRuleList
    }
  }
};
