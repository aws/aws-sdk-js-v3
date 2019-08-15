import { _LaunchDetails } from "./_LaunchDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AppSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    appId: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    statusMessage: {
      shape: {
        type: "string"
      }
    },
    replicationStatus: {
      shape: {
        type: "string"
      }
    },
    replicationStatusMessage: {
      shape: {
        type: "string"
      }
    },
    latestReplicationTime: {
      shape: {
        type: "timestamp"
      }
    },
    launchStatus: {
      shape: {
        type: "string"
      }
    },
    launchStatusMessage: {
      shape: {
        type: "string"
      }
    },
    launchDetails: {
      shape: _LaunchDetails
    },
    creationTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastModified: {
      shape: {
        type: "timestamp"
      }
    },
    roleName: {
      shape: {
        type: "string"
      }
    },
    totalServerGroups: {
      shape: {
        type: "integer"
      }
    },
    totalServers: {
      shape: {
        type: "integer"
      }
    }
  }
};
