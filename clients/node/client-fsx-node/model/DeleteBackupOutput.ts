import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBackupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    Lifecycle: {
      shape: {
        type: "string"
      }
    }
  }
};
