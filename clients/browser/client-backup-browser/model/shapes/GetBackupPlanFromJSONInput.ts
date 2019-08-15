import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBackupPlanFromJSONInput: _Structure_ = {
  type: "structure",
  required: ["BackupPlanTemplateJson"],
  members: {
    BackupPlanTemplateJson: {
      shape: {
        type: "string"
      }
    }
  }
};
