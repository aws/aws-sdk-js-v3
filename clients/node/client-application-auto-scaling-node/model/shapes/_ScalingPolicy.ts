import { _StepScalingPolicyConfiguration } from "./_StepScalingPolicyConfiguration";
import { _TargetTrackingScalingPolicyConfiguration } from "./_TargetTrackingScalingPolicyConfiguration";
import { _Alarms } from "./_Alarms";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScalingPolicy: _Structure_ = {
  type: "structure",
  required: [
    "PolicyARN",
    "PolicyName",
    "ServiceNamespace",
    "ResourceId",
    "ScalableDimension",
    "PolicyType",
    "CreationTime"
  ],
  members: {
    PolicyARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
    },
    Alarms: {
      shape: _Alarms
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
