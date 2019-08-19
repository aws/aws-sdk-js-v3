import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteApplicationSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "SnapshotName", "SnapshotCreationTimestamp"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SnapshotName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SnapshotCreationTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
