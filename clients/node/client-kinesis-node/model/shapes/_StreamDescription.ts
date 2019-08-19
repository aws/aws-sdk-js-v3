import { _ShardList } from "./_ShardList";
import { _EnhancedMonitoringList } from "./_EnhancedMonitoringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamDescription: _Structure_ = {
  type: "structure",
  required: [
    "StreamName",
    "StreamARN",
    "StreamStatus",
    "Shards",
    "HasMoreShards",
    "RetentionPeriodHours",
    "StreamCreationTimestamp",
    "EnhancedMonitoring"
  ],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StreamStatus: {
      shape: {
        type: "string"
      }
    },
    Shards: {
      shape: _ShardList
    },
    HasMoreShards: {
      shape: {
        type: "boolean"
      }
    },
    RetentionPeriodHours: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    StreamCreationTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    EnhancedMonitoring: {
      shape: _EnhancedMonitoringList
    },
    EncryptionType: {
      shape: {
        type: "string"
      }
    },
    KeyId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
