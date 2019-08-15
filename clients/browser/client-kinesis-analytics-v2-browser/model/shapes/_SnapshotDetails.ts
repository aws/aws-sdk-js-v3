import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SnapshotDetails: _Structure_ = {
  type: "structure",
  required: ["SnapshotName", "SnapshotStatus", "ApplicationVersionId"],
  members: {
    SnapshotName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SnapshotStatus: {
      shape: {
        type: "string"
      }
    },
    ApplicationVersionId: {
      shape: {
        type: "integer",
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
