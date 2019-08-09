import { Structure as _Structure_ } from "@aws-sdk/types";

export const RestoreFromSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["SnapshotId"],
  members: {
    SnapshotId: {
      shape: {
        type: "string"
      }
    }
  }
};
