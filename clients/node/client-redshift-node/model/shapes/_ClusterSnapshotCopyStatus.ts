import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterSnapshotCopyStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DestinationRegion: {
      shape: {
        type: "string"
      }
    },
    RetentionPeriod: {
      shape: {
        type: "integer"
      }
    },
    ManualSnapshotRetentionPeriod: {
      shape: {
        type: "integer"
      }
    },
    SnapshotCopyGrantName: {
      shape: {
        type: "string"
      }
    }
  }
};
