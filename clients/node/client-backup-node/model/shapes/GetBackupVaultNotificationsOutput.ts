import { _BackupVaultEvents } from "./_BackupVaultEvents";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBackupVaultNotificationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupVaultName: {
      shape: {
        type: "string"
      }
    },
    BackupVaultArn: {
      shape: {
        type: "string"
      }
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
