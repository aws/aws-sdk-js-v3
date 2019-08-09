import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopySnapshotOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SnapshotId: {
      shape: {
        type: "string"
      },
      locationName: "snapshotId"
    }
  }
};
