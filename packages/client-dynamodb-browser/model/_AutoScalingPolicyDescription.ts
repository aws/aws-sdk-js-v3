import { _AutoScalingTargetTrackingScalingPolicyConfigurationDescription } from "./_AutoScalingTargetTrackingScalingPolicyConfigurationDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AutoScalingPolicyDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TargetTrackingScalingPolicyConfiguration: {
      shape: _AutoScalingTargetTrackingScalingPolicyConfigurationDescription
    }
  }
};
