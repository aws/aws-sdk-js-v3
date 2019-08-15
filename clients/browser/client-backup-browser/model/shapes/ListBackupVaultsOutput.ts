import { _BackupVaultList } from "./_BackupVaultList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBackupVaultsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupVaultList: {
      shape: _BackupVaultList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
