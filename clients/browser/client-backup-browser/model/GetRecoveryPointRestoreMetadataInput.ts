import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRecoveryPointRestoreMetadataInput: _Structure_ = {
  type: "structure",
  required: ["BackupVaultName", "RecoveryPointArn"],
  members: {
    BackupVaultName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "backupVaultName"
    },
    RecoveryPointArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "recoveryPointArn"
    }
  }
};
