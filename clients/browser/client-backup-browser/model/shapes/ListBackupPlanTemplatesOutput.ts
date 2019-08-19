import { _BackupPlanTemplatesList } from "./_BackupPlanTemplatesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBackupPlanTemplatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    BackupPlanTemplatesList: {
      shape: _BackupPlanTemplatesList
    }
  }
};
