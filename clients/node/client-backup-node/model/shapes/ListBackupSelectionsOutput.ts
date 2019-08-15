import { _BackupSelectionsList } from "./_BackupSelectionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBackupSelectionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    BackupSelectionsList: {
      shape: _BackupSelectionsList
    }
  }
};
