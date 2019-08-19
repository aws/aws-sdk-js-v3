import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDiskSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["diskSnapshotName"],
  members: {
    diskSnapshotName: {
      shape: {
        type: "string"
      }
    }
  }
};
