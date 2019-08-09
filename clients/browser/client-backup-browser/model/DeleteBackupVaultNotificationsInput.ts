import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBackupVaultNotificationsInput: _Structure_ = {
  type: "structure",
  required: ["BackupVaultName"],
  members: {
    BackupVaultName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "backupVaultName"
    }
  }
};
