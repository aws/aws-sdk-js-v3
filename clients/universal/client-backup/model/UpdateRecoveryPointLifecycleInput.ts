import { _Lifecycle } from "./_Lifecycle";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRecoveryPointLifecycleInput: _Structure_ = {
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
    },
    Lifecycle: {
      shape: _Lifecycle
    }
  }
};
