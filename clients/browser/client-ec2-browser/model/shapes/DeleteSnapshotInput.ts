import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["SnapshotId"],
  members: {
    SnapshotId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
