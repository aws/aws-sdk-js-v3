import { _SnapshotIdentifierList } from "./_SnapshotIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchModifyClusterSnapshotsInput: _Structure_ = {
  type: "structure",
  required: ["SnapshotIdentifierList"],
  members: {
    SnapshotIdentifierList: {
      shape: _SnapshotIdentifierList
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
