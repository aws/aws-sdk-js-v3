import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopySnapshotInput: _Structure_ = {
  type: "structure",
  required: ["SourceSnapshotName", "TargetSnapshotName"],
  members: {
    SourceSnapshotName: {
      shape: {
        type: "string"
      }
    },
    TargetSnapshotName: {
      shape: {
        type: "string"
      }
    },
    TargetBucket: {
      shape: {
        type: "string"
      }
    }
  }
};
