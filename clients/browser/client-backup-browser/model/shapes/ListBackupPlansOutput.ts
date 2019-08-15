import { _BackupPlansList } from "./_BackupPlansList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBackupPlansOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    BackupPlansList: {
      shape: _BackupPlansList
    }
  }
};
