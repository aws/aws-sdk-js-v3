import { _StepAdjustments } from "./_StepAdjustments";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StepScalingPolicyConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdjustmentType: {
      shape: {
        type: "string"
      }
    },
    StepAdjustments: {
      shape: _StepAdjustments
    },
    MinAdjustmentMagnitude: {
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
        type: "string"
      }
    }
  }
};
