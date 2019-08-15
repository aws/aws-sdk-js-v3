import { _SnapshotIdentifierList } from "./_SnapshotIdentifierList";
import { _BatchSnapshotOperationErrorList } from "./_BatchSnapshotOperationErrorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeleteClusterSnapshotsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Resources: {
      shape: _SnapshotIdentifierList
    },
    Errors: {
      shape: _BatchSnapshotOperationErrorList
    }
  }
};
