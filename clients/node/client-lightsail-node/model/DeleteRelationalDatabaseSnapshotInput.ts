import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteRelationalDatabaseSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["relationalDatabaseSnapshotName"],
  members: {
    relationalDatabaseSnapshotName: {
      shape: {
        type: "string"
      }
    }
  }
};
