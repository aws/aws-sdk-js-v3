import { _Matcher } from "./_Matcher";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyTargetGroupInput: _Structure_ = {
  type: "structure",
  required: ["TargetGroupArn"],
  members: {
    TargetGroupArn: {
      shape: {
        type: "string"
      }
    },
    HealthCheckProtocol: {
      shape: {
        type: "string"
      }
    },
    HealthCheckPort: {
      shape: {
        type: "string"
      }
    },
    HealthCheckPath: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HealthCheckEnabled: {
      shape: {
        type: "boolean"
      }
    },
    HealthCheckIntervalSeconds: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    HealthCheckTimeoutSeconds: {
      shape: {
        type: "integer",
        min: 2
      }
    },
    HealthyThresholdCount: {
      shape: {
        type: "integer",
        min: 2
      }
    },
    UnhealthyThresholdCount: {
      shape: {
        type: "integer",
        min: 2
      }
    },
    Matcher: {
      shape: _Matcher
    }
  }
};
