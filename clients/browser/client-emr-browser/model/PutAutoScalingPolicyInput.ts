import { _AutoScalingPolicy } from "./_AutoScalingPolicy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutAutoScalingPolicyInput: _Structure_ = {
  type: "structure",
  required: ["ClusterId", "InstanceGroupId", "AutoScalingPolicy"],
  members: {
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    InstanceGroupId: {
      shape: {
        type: "string"
      }
    },
    AutoScalingPolicy: {
      shape: _AutoScalingPolicy
    }
  }
};
