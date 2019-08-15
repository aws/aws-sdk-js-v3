import { _RecoveryPointByBackupVaultList } from "./_RecoveryPointByBackupVaultList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRecoveryPointsByBackupVaultOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    RecoveryPoints: {
      shape: _RecoveryPointByBackupVaultList
    }
  }
};
