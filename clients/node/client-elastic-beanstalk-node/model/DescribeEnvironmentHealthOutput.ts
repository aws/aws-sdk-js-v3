import { _Causes } from "./_Causes";
import { _ApplicationMetrics } from "./_ApplicationMetrics";
import { _InstanceHealthSummary } from "./_InstanceHealthSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEnvironmentHealthOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EnvironmentName: {
      shape: {
        type: "string",
        min: 4
      }
    },
    HealthStatus: {
      shape: {
        type: "string"
      }
    },
    Status: {
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
    ApplicationMetrics: {
      shape: _ApplicationMetrics
    },
    InstancesHealth: {
      shape: _InstanceHealthSummary
    },
    RefreshedAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
