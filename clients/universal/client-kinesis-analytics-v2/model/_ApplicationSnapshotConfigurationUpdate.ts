import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationSnapshotConfigurationUpdate: _Structure_ = {
  type: "structure",
  required: ["SnapshotsEnabledUpdate"],
  members: {
    SnapshotsEnabledUpdate: {
      shape: {
        type: "boolean"
      }
    }
  }
};
