import { _TargetGroupARNs } from "./_TargetGroupARNs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachLoadBalancerTargetGroupsInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName", "TargetGroupARNs"],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TargetGroupARNs: {
      shape: _TargetGroupARNs
    }
  }
};
