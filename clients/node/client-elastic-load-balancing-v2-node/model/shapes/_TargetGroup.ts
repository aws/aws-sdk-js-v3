import { _Matcher } from "./_Matcher";
import { _LoadBalancerArns } from "./_LoadBalancerArns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TargetGroupArn: {
      shape: {
        type: "string"
      }
    },
    TargetGroupName: {
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
    HealthCheckPath: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Matcher: {
      shape: _Matcher
    },
    LoadBalancerArns: {
      shape: _LoadBalancerArns
    },
    TargetType: {
      shape: {
        type: "string"
      }
    }
  }
};
