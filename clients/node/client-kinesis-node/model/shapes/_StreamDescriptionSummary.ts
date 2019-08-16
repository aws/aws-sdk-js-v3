import { _EnhancedMonitoringList } from "./_EnhancedMonitoringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamDescriptionSummary: _Structure_ = {
  type: "structure",
  required: [
    "StreamName",
    "StreamARN",
    "StreamStatus",
    "RetentionPeriodHours",
    "StreamCreationTimestamp",
    "EnhancedMonitoring",
    "OpenShardCount"
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
    },
    OpenShardCount: {
      shape: {
        type: "integer"
      }
    },
    ConsumerCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
