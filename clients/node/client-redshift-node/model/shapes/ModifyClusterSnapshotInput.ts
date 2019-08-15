import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyClusterSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["SnapshotIdentifier"],
  members: {
    SnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    ManualSnapshotRetentionPeriod: {
      shape: {
        type: "integer"
      }
    },
    Force: {
      shape: {
        type: "boolean"
      }
    }
  }
};
