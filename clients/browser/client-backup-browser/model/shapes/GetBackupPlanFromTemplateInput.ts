import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBackupPlanFromTemplateInput: _Structure_ = {
  type: "structure",
  required: ["BackupPlanTemplateId"],
  members: {
    BackupPlanTemplateId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "templateId"
    }
  }
};
