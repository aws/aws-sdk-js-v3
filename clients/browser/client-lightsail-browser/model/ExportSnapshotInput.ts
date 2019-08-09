import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExportSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["sourceSnapshotName"],
  members: {
    sourceSnapshotName: {
      shape: {
        type: "string"
      }
    }
  }
};
