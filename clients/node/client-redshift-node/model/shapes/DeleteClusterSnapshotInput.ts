import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteClusterSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["SnapshotIdentifier"],
  members: {
    SnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    SnapshotClusterIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
