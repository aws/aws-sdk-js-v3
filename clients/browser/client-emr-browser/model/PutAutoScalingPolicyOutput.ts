import { _AutoScalingPolicyDescription } from "./_AutoScalingPolicyDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutAutoScalingPolicyOutput: _Structure_ = {
  type: "structure",
  required: [],
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
      shape: _AutoScalingPolicyDescription
    }
  }
};
