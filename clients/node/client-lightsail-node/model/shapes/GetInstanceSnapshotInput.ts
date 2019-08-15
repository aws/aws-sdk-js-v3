import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInstanceSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["instanceSnapshotName"],
  members: {
    instanceSnapshotName: {
      shape: {
        type: "string"
      }
    }
  }
};
