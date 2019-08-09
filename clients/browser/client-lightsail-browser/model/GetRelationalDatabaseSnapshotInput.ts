import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRelationalDatabaseSnapshotInput: _Structure_ = {
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
