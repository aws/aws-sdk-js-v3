import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDBClusterSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterSnapshotIdentifier"],
  members: {
    DBClusterSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
