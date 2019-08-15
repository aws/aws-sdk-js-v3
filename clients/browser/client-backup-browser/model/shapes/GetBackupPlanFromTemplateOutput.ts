import { _BackupPlan } from "./_BackupPlan";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBackupPlanFromTemplateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupPlanDocument: {
      shape: _BackupPlan
    }
  }
};
