import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBackupInput: _Structure_ = {
  type: "structure",
  required: ["BackupId"],
  members: {
    BackupId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
