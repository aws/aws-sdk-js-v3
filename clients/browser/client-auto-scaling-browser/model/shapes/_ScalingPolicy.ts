import { _StepAdjustments } from "./_StepAdjustments";
import { _Alarms } from "./_Alarms";
import { _TargetTrackingConfiguration } from "./_TargetTrackingConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScalingPolicy: _Structure_ = {
  type: "structure",
  required: [],
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
    PolicyARN: {
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
    StepAdjustments: {
      shape: _StepAdjustments
    },
    MetricAggregationType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EstimatedInstanceWarmup: {
      shape: {
        type: "integer"
      }
    },
    Alarms: {
      shape: _Alarms
    },
    TargetTrackingConfiguration: {
      shape: _TargetTrackingConfiguration
    }
  }
};
