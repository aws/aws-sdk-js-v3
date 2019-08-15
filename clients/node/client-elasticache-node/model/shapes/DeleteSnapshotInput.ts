import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["SnapshotName"],
  members: {
    SnapshotName: {
      shape: {
        type: "string"
      }
    }
  }
};
