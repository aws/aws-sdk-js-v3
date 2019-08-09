import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HealthCheck: _Structure_ = {
  type: "structure",
  required: [
    "Target",
    "Interval",
    "Timeout",
    "UnhealthyThreshold",
    "HealthyThreshold"
  ],
  members: {
    Target: {
      shape: {
        type: "string"
      }
    },
    Interval: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    Timeout: {
      shape: {
        type: "integer",
        min: 2
      }
    },
    UnhealthyThreshold: {
      shape: {
        type: "integer",
        min: 2
      }
    },
    HealthyThreshold: {
      shape: {
        type: "integer",
        min: 2
      }
    }
  }
};
