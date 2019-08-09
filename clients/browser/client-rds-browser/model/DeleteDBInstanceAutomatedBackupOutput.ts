import { _DBInstanceAutomatedBackup } from "./_DBInstanceAutomatedBackup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDBInstanceAutomatedBackupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBInstanceAutomatedBackup: {
      shape: _DBInstanceAutomatedBackup
    }
  }
};
