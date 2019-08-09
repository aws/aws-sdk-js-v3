import { _ReplicationRunStageDetails } from "./_ReplicationRunStageDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplicationRun: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    replicationRunId: {
      shape: {
        type: "string"
      }
    },
    state: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    stageDetails: {
      shape: _ReplicationRunStageDetails
    },
    statusMessage: {
      shape: {
        type: "string"
      }
    },
    amiId: {
      shape: {
        type: "string"
      }
    },
    scheduledStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    completedTime: {
      shape: {
        type: "timestamp"
      }
    },
    description: {
      shape: {
        type: "string"
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
    }
  }
};
