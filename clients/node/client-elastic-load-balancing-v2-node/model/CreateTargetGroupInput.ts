import { _Matcher } from "./_Matcher";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTargetGroupInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Protocol: {
      shape: {
        type: "string"
      }
    },
    Port: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    VpcId: {
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
    HealthCheckEnabled: {
      shape: {
        type: "boolean"
      }
    },
    HealthCheckPath: {
      shape: {
        type: "string",
        min: 1
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
    },
    TargetType: {
      shape: {
        type: "string"
      }
    }
  }
};
