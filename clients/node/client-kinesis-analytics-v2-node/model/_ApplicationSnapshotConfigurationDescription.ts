import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationSnapshotConfigurationDescription: _Structure_ = {
  type: "structure",
  required: ["SnapshotsEnabled"],
  members: {
    SnapshotsEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
