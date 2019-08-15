import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartReplicationTaskInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationTaskArn", "StartReplicationTaskType"],
  members: {
    ReplicationTaskArn: {
      shape: {
        type: "string"
      }
    },
    StartReplicationTaskType: {
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
