import { _BackupVaultEvents } from "./_BackupVaultEvents";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutBackupVaultNotificationsInput: _Structure_ = {
  type: "structure",
  required: ["BackupVaultName", "SNSTopicArn", "BackupVaultEvents"],
  members: {
    BackupVaultName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "backupVaultName"
    },
    SNSTopicArn: {
      shape: {
        type: "string"
      }
    },
    BackupVaultEvents: {
      shape: _BackupVaultEvents
    }
  }
};
