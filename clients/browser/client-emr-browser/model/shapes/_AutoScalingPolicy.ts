import { _ScalingConstraints } from "./_ScalingConstraints";
import { _ScalingRuleList } from "./_ScalingRuleList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AutoScalingPolicy: _Structure_ = {
  type: "structure",
  required: ["Constraints", "Rules"],
  members: {
    Constraints: {
      shape: _ScalingConstraints
    },
    Rules: {
      shape: _ScalingRuleList
    }
  }
};
