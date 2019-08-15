import { List as _List_ } from "@aws-sdk/types";
import { _BackupVaultListMember } from "./_BackupVaultListMember";

export const _BackupVaultList: _List_ = {
  type: "list",
  member: {
    shape: _BackupVaultListMember
  }
};
