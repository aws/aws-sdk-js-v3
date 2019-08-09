import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopySnapshotInput: _Structure_ = {
  type: "structure",
  required: ["sourceSnapshotName", "targetSnapshotName", "sourceRegion"],
  members: {
    sourceSnapshotName: {
      shape: {
        type: "string"
      }
    },
    targetSnapshotName: {
      shape: {
        type: "string"
      }
    },
    sourceRegion: {
      shape: {
        type: "string"
      }
    }
  }
};
