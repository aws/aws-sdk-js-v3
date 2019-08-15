import { List as _List_ } from "@aws-sdk/types";
import { _BackupPlanTemplatesListMember } from "./_BackupPlanTemplatesListMember";

export const _BackupPlanTemplatesList: _List_ = {
  type: "list",
  member: {
    shape: _BackupPlanTemplatesListMember
  }
};
