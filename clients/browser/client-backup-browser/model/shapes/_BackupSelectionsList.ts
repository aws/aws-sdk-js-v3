import { List as _List_ } from "@aws-sdk/types";
import { _BackupSelectionsListMember } from "./_BackupSelectionsListMember";

export const _BackupSelectionsList: _List_ = {
  type: "list",
  member: {
    shape: _BackupSelectionsListMember
  }
};
