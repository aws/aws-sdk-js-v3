import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDBSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["DBSnapshotIdentifier"],
  members: {
    DBSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
