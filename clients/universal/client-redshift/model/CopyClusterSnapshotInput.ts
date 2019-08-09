import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyClusterSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["SourceSnapshotIdentifier", "TargetSnapshotIdentifier"],
  members: {
    SourceSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    SourceSnapshotClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    TargetSnapshotIdentifier: {
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
