import { _Backup } from "./_Backup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RestoreBackupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Backup: {
      shape: _Backup
    }
  }
};
