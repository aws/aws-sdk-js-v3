import { _NetworkConfiguration } from "./_NetworkConfiguration";
import { _LoadBalancers } from "./_LoadBalancers";
import { _ServiceRegistries } from "./_ServiceRegistries";
import { _Scale } from "./_Scale";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TaskSet: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    taskSetArn: {
      shape: {
        type: "string"
      }
    },
    serviceArn: {
      shape: {
        type: "string"
      }
    },
    clusterArn: {
      shape: {
        type: "string"
      }
    },
    startedBy: {
      shape: {
        type: "string"
      }
    },
    externalId: {
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
    computedDesiredCount: {
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
    },
    loadBalancers: {
      shape: _LoadBalancers
    },
    serviceRegistries: {
      shape: _ServiceRegistries
    },
    scale: {
      shape: _Scale
    },
    stabilityStatus: {
      shape: {
        type: "string"
      }
    },
    stabilityStatusAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
