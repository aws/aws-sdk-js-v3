import { List as _List_ } from "@aws-sdk/types";
import { _RecoveryPointByBackupVault } from "./_RecoveryPointByBackupVault";

export const _RecoveryPointByBackupVaultList: _List_ = {
  type: "list",
  member: {
    shape: _RecoveryPointByBackupVault
  }
};
