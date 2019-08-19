import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateReplicationTaskInput: _Structure_ = {
  type: "structure",
  required: [
    "ReplicationTaskIdentifier",
    "SourceEndpointArn",
    "TargetEndpointArn",
    "ReplicationInstanceArn",
    "MigrationType",
    "TableMappings"
  ],
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
    CdcStartTime: {
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
    Tags: {
      shape: _TagList
    }
  }
};
