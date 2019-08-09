import { _TaskOverride } from "./_TaskOverride";
import { _Containers } from "./_Containers";
import { _Attachments } from "./_Attachments";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Task: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskArn: {
      shape: {
        type: "string"
      }
    },
    clusterArn: {
      shape: {
        type: "string"
      }
    },
    taskDefinitionArn: {
      shape: {
        type: "string"
      }
    },
    containerInstanceArn: {
      shape: {
        type: "string"
      }
    },
    overrides: {
      shape: _TaskOverride
    },
    lastStatus: {
      shape: {
        type: "string"
      }
    },
    desiredStatus: {
      shape: {
        type: "string"
      }
    },
    cpu: {
      shape: {
        type: "string"
      }
    },
    memory: {
      shape: {
        type: "string"
      }
    },
    containers: {
      shape: _Containers
    },
    startedBy: {
      shape: {
        type: "string"
      }
    },
    version: {
      shape: {
        type: "integer"
      }
    },
    stoppedReason: {
      shape: {
        type: "string"
      }
    },
    stopCode: {
      shape: {
        type: "string"
      }
    },
    connectivity: {
      shape: {
        type: "string"
      }
    },
    connectivityAt: {
      shape: {
        type: "timestamp"
      }
    },
    pullStartedAt: {
      shape: {
        type: "timestamp"
      }
    },
    pullStoppedAt: {
      shape: {
        type: "timestamp"
      }
    },
    executionStoppedAt: {
      shape: {
        type: "timestamp"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    startedAt: {
      shape: {
        type: "timestamp"
      }
    },
    stoppingAt: {
      shape: {
        type: "timestamp"
      }
    },
    stoppedAt: {
      shape: {
        type: "timestamp"
      }
    },
    group: {
      shape: {
        type: "string"
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
    attachments: {
      shape: _Attachments
    },
    healthStatus: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _Tags
    }
  }
};
