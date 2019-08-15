import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDBClusterSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterSnapshotIdentifier", "DBClusterIdentifier"],
  members: {
    DBClusterSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
