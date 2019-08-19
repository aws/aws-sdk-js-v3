import { _StepScalingPolicyConfiguration } from "./_StepScalingPolicyConfiguration";
import { _TargetTrackingScalingPolicyConfiguration } from "./_TargetTrackingScalingPolicyConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutScalingPolicyInput: _Structure_ = {
  type: "structure",
  required: [
    "PolicyName",
    "ServiceNamespace",
    "ResourceId",
    "ScalableDimension"
  ],
  members: {
    PolicyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServiceNamespace: {
      shape: {
        type: "string"
      }
    },
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScalableDimension: {
      shape: {
        type: "string"
      }
    },
    PolicyType: {
      shape: {
        type: "string"
      }
    },
    StepScalingPolicyConfiguration: {
      shape: _StepScalingPolicyConfiguration
    },
    TargetTrackingScalingPolicyConfiguration: {
      shape: _TargetTrackingScalingPolicyConfiguration
    }
  }
};
