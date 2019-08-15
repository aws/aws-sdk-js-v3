import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBackupVaultInput: _Structure_ = {
  type: "structure",
  required: ["BackupVaultName"],
  members: {
    BackupVaultName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "backupVaultName"
    },
    BackupVaultTags: {
      shape: _Tags
    },
    EncryptionKeyArn: {
      shape: {
        type: "string"
      }
    },
    CreatorRequestId: {
      shape: {
        type: "string"
      }
    }
  }
};
