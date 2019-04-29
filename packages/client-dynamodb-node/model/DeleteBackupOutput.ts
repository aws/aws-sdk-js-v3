import { _BackupDescription } from "./_BackupDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBackupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupDescription: {
      shape: _BackupDescription
    }
  }
};
