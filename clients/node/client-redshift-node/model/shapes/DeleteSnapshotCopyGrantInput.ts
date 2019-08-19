import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSnapshotCopyGrantInput: _Structure_ = {
  type: "structure",
  required: ["SnapshotCopyGrantName"],
  members: {
    SnapshotCopyGrantName: {
      shape: {
        type: "string"
      }
    }
  }
};
