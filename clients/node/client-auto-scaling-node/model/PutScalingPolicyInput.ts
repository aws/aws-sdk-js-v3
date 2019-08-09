import { _StepAdjustments } from "./_StepAdjustments";
import { _TargetTrackingConfiguration } from "./_TargetTrackingConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutScalingPolicyInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName", "PolicyName"],
  members: {
    AutoScalingGroupName: {
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
    PolicyType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AdjustmentType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MinAdjustmentStep: {
      shape: {
        type: "integer"
      }
    },
    MinAdjustmentMagnitude: {
      shape: {
        type: "integer"
      }
    },
    ScalingAdjustment: {
      shape: {
        type: "integer"
      }
    },
    Cooldown: {
      shape: {
        type: "integer"
      }
    },
    MetricAggregationType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StepAdjustments: {
      shape: _StepAdjustments
    },
    EstimatedInstanceWarmup: {
      shape: {
        type: "integer"
      }
    },
    TargetTrackingConfiguration: {
      shape: _TargetTrackingConfiguration
    }
  }
};
