import { _Causes } from "./_Causes";
import { _ApplicationMetrics } from "./_ApplicationMetrics";
import { _SystemStatus } from "./_SystemStatus";
import { _Deployment } from "./_Deployment";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SingleInstanceHealth: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HealthStatus: {
      shape: {
        type: "string"
      }
    },
    Color: {
      shape: {
        type: "string"
      }
    },
    Causes: {
      shape: _Causes
    },
    LaunchedAt: {
      shape: {
        type: "timestamp"
      }
    },
    ApplicationMetrics: {
      shape: _ApplicationMetrics
    },
    System: {
      shape: _SystemStatus
    },
    Deployment: {
      shape: _Deployment
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    InstanceType: {
      shape: {
        type: "string"
      }
    }
  }
};
