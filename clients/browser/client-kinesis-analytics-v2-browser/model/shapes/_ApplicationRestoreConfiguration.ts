import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationRestoreConfiguration: _Structure_ = {
  type: "structure",
  required: ["ApplicationRestoreType"],
  members: {
    ApplicationRestoreType: {
      shape: {
        type: "string"
      }
    },
    SnapshotName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
