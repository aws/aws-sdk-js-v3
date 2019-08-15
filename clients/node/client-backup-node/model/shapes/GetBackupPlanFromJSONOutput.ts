import { _BackupPlan } from "./_BackupPlan";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBackupPlanFromJSONOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupPlan: {
      shape: _BackupPlan
    }
  }
};
