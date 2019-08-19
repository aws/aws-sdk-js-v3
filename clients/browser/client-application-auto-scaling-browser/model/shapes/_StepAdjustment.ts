import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StepAdjustment: _Structure_ = {
  type: "structure",
  required: ["ScalingAdjustment"],
  members: {
    MetricIntervalLowerBound: {
      shape: {
        type: "float"
      }
    },
    MetricIntervalUpperBound: {
      shape: {
        type: "float"
      }
    },
    ScalingAdjustment: {
      shape: {
        type: "integer"
      }
    }
  }
};
