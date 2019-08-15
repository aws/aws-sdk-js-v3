import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HealthCheckPolicy: _Structure_ = {
  type: "structure",
  required: [
    "healthyThreshold",
    "intervalMillis",
    "protocol",
    "timeoutMillis",
    "unhealthyThreshold"
  ],
  members: {
    healthyThreshold: {
      shape: {
        type: "integer",
        min: 2
      }
    },
    intervalMillis: {
      shape: {
        type: "integer",
        min: 5000
      }
    },
    path: {
      shape: {
        type: "string"
      }
    },
    port: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    protocol: {
      shape: {
        type: "string"
      }
    },
    timeoutMillis: {
      shape: {
        type: "integer",
        min: 2000
      }
    },
    unhealthyThreshold: {
      shape: {
        type: "integer",
        min: 2
      }
    }
  }
};
