import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteRelationalDatabaseInput: _Structure_ = {
  type: "structure",
  required: ["relationalDatabaseName"],
  members: {
    relationalDatabaseName: {
      shape: {
        type: "string"
      }
    },
    skipFinalSnapshot: {
      shape: {
        type: "boolean"
      }
    },
    finalRelationalDatabaseSnapshotName: {
      shape: {
        type: "string"
      }
    }
  }
};
