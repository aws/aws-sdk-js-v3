import { _DBInstanceAutomatedBackupList } from "./_DBInstanceAutomatedBackupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBInstanceAutomatedBackupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    DBInstanceAutomatedBackups: {
      shape: _DBInstanceAutomatedBackupList
    }
  }
};
