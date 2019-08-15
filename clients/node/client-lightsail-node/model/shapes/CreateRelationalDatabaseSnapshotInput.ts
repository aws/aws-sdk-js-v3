import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRelationalDatabaseSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["relationalDatabaseName", "relationalDatabaseSnapshotName"],
  members: {
    relationalDatabaseName: {
      shape: {
        type: "string"
      }
    },
    relationalDatabaseSnapshotName: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
