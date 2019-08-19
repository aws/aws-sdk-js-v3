import { _MetricValue } from "./_MetricValue";
import { _StatisticalThreshold } from "./_StatisticalThreshold";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BehaviorCriteria: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    comparisonOperator: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: _MetricValue
    },
    durationSeconds: {
      shape: {
        type: "integer"
      }
    },
    consecutiveDatapointsToAlarm: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    consecutiveDatapointsToClear: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    statisticalThreshold: {
      shape: _StatisticalThreshold
    }
  }
};
