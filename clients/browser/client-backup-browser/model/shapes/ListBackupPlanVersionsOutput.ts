import { _BackupPlanVersionsList } from "./_BackupPlanVersionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBackupPlanVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    BackupPlanVersionsList: {
      shape: _BackupPlanVersionsList
    }
  }
};
