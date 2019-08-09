import { _BackupPlanInput } from "./_BackupPlanInput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateBackupPlanInput: _Structure_ = {
  type: "structure",
  required: ["BackupPlanId", "BackupPlan"],
  members: {
    BackupPlanId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "backupPlanId"
    },
    BackupPlan: {
      shape: _BackupPlanInput
    }
  }
};
