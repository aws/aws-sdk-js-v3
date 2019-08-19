import { _NetworkConfiguration } from "./_NetworkConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Deployment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    taskDefinition: {
      shape: {
        type: "string"
      }
    },
    desiredCount: {
      shape: {
        type: "integer"
      }
    },
    pendingCount: {
      shape: {
        type: "integer"
      }
    },
    runningCount: {
      shape: {
        type: "integer"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    updatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    launchType: {
      shape: {
        type: "string"
      }
    },
    platformVersion: {
      shape: {
        type: "string"
      }
    },
    networkConfiguration: {
      shape: _NetworkConfiguration
    }
  }
};
