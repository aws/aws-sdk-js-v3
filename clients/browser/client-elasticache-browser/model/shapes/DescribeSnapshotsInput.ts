import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSnapshotsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationGroupId: {
      shape: {
        type: "string"
      }
    },
    CacheClusterId: {
      shape: {
        type: "string"
      }
    },
    SnapshotName: {
      shape: {
        type: "string"
      }
    },
    SnapshotSource: {
      shape: {
        type: "string"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    },
    ShowNodeGroupConfig: {
      shape: {
        type: "boolean"
      }
    }
  }
};
