import { Structure as _Structure_ } from "@aws-sdk/types";

export const EnableSnapshotCopyInput: _Structure_ = {
  type: "structure",
  required: ["ClusterIdentifier", "DestinationRegion"],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
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
    SnapshotCopyGrantName: {
      shape: {
        type: "string"
      }
    },
    ManualSnapshotRetentionPeriod: {
      shape: {
        type: "integer"
      }
    }
  }
};
