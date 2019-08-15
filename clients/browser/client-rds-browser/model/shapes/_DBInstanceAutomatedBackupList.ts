import { List as _List_ } from "@aws-sdk/types";
import { _DBInstanceAutomatedBackup } from "./_DBInstanceAutomatedBackup";

export const _DBInstanceAutomatedBackupList: _List_ = {
  type: "list",
  member: {
    shape: _DBInstanceAutomatedBackup,
    locationName: "DBInstanceAutomatedBackup"
  }
};
