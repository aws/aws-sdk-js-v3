import { _ReplicationTaskStats } from "./_ReplicationTaskStats";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplicationTask: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationTaskIdentifier: {
      shape: {
        type: "string"
      }
    },
    SourceEndpointArn: {
      shape: {
        type: "string"
      }
    },
    TargetEndpointArn: {
      shape: {
        type: "string"
      }
    },
    ReplicationInstanceArn: {
      shape: {
        type: "string"
      }
    },
    MigrationType: {
      shape: {
        type: "string"
      }
    },
    TableMappings: {
      shape: {
        type: "string"
      }
    },
    ReplicationTaskSettings: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    LastFailureMessage: {
      shape: {
        type: "string"
      }
    },
    StopReason: {
      shape: {
        type: "string"
      }
    },
    ReplicationTaskCreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    ReplicationTaskStartDate: {
      shape: {
        type: "timestamp"
      }
    },
    CdcStartPosition: {
      shape: {
        type: "string"
      }
    },
    CdcStopPosition: {
      shape: {
        type: "string"
      }
    },
    RecoveryCheckpoint: {
      shape: {
        type: "string"
      }
    },
    ReplicationTaskArn: {
      shape: {
        type: "string"
      }
    },
    ReplicationTaskStats: {
      shape: _ReplicationTaskStats
    }
  }
};
