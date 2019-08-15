import { _SnapshotIdentifierList } from "./_SnapshotIdentifierList";
import { _BatchSnapshotOperationErrors } from "./_BatchSnapshotOperationErrors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchModifyClusterSnapshotsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Resources: {
      shape: _SnapshotIdentifierList
    },
    Errors: {
      shape: _BatchSnapshotOperationErrors
    }
  }
};
