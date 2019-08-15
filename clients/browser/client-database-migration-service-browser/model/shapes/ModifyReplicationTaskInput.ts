import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyReplicationTaskInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationTaskArn"],
  members: {
    ReplicationTaskArn: {
      shape: {
        type: "string"
      }
    },
    ReplicationTaskIdentifier: {
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
    }
  }
};
