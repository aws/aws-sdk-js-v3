import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SnapshotLimits: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ManualSnapshotsLimit: {
      shape: {
        type: "integer"
      }
    },
    ManualSnapshotsCurrentCount: {
      shape: {
        type: "integer"
      }
    },
    ManualSnapshotsLimitReached: {
      shape: {
        type: "boolean"
      }
    }
  }
};
