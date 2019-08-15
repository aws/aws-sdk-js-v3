import { List as _List_ } from "@aws-sdk/types";
import { _BackupPlansListMember } from "./_BackupPlansListMember";

export const _BackupPlanVersionsList: _List_ = {
  type: "list",
  member: {
    shape: _BackupPlansListMember
  }
};
