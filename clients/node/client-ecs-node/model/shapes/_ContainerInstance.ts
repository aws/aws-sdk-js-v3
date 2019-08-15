import { _VersionInfo } from "./_VersionInfo";
import { _Resources } from "./_Resources";
import { _Attributes } from "./_Attributes";
import { _Attachments } from "./_Attachments";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContainerInstance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    containerInstanceArn: {
      shape: {
        type: "string"
      }
    },
    ec2InstanceId: {
      shape: {
        type: "string"
      }
    },
    version: {
      shape: {
        type: "integer"
      }
    },
    versionInfo: {
      shape: _VersionInfo
    },
    remainingResources: {
      shape: _Resources
    },
    registeredResources: {
      shape: _Resources
    },
    status: {
      shape: {
        type: "string"
      }
    },
    statusReason: {
      shape: {
        type: "string"
      }
    },
    agentConnected: {
      shape: {
        type: "boolean"
      }
    },
    runningTasksCount: {
      shape: {
        type: "integer"
      }
    },
    pendingTasksCount: {
      shape: {
        type: "integer"
      }
    },
    agentUpdateStatus: {
      shape: {
        type: "string"
      }
    },
    attributes: {
      shape: _Attributes
    },
    registeredAt: {
      shape: {
        type: "timestamp"
      }
    },
    attachments: {
      shape: _Attachments
    },
    tags: {
      shape: _Tags
    }
  }
};
