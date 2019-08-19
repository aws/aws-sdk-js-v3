import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDBSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["DBSnapshotIdentifier", "DBInstanceIdentifier"],
  members: {
    DBSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
