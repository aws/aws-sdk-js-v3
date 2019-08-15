import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AutoScalingThresholds: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceCount: {
      shape: {
        type: "integer"
      }
    },
    ThresholdsWaitTime: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    IgnoreMetricsTime: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    CpuThreshold: {
      shape: {
        type: "float"
      }
    },
    MemoryThreshold: {
      shape: {
        type: "float"
      }
    },
    LoadThreshold: {
      shape: {
        type: "float"
      }
    },
    Alarms: {
      shape: _Strings
    }
  }
};
