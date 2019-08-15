import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BackupPlanTemplatesListMember: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupPlanTemplateId: {
      shape: {
        type: "string"
      }
    },
    BackupPlanTemplateName: {
      shape: {
        type: "string"
      }
    }
  }
};
