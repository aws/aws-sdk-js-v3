import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDBClusterInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterIdentifier"],
  members: {
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    SkipFinalSnapshot: {
      shape: {
        type: "boolean"
      }
    },
    FinalDBSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
