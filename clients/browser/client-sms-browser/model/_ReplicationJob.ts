import { _VmServer } from "./_VmServer";
import { _ReplicationRunList } from "./_ReplicationRunList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplicationJob: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    replicationJobId: {
      shape: {
        type: "string"
      }
    },
    serverId: {
      shape: {
        type: "string"
      }
    },
    serverType: {
      shape: {
        type: "string"
      }
    },
    vmServer: {
      shape: _VmServer
    },
    seedReplicationTime: {
      shape: {
        type: "timestamp"
      }
    },
    frequency: {
      shape: {
        type: "integer"
      }
    },
    runOnce: {
      shape: {
        type: "boolean"
      }
    },
    nextReplicationRunStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    licenseType: {
      shape: {
        type: "string"
      }
    },
    roleName: {
      shape: {
        type: "string"
      }
    },
    latestAmiId: {
      shape: {
        type: "string"
      }
    },
    state: {
      shape: {
        type: "string"
      }
    },
    statusMessage: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    numberOfRecentAmisToKeep: {
      shape: {
        type: "integer"
      }
    },
    encrypted: {
      shape: {
        type: "boolean"
      }
    },
    kmsKeyId: {
      shape: {
        type: "string"
      }
    },
    replicationRunList: {
      shape: _ReplicationRunList
    }
  }
};
