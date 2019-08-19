import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBackupPlanInput: _Structure_ = {
  type: "structure",
  required: ["BackupPlanId"],
  members: {
    BackupPlanId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "backupPlanId"
    }
  }
};
