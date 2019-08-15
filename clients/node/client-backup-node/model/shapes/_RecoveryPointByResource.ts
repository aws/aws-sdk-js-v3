import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RecoveryPointByResource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RecoveryPointArn: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    EncryptionKeyArn: {
      shape: {
        type: "string"
      }
    },
    BackupSizeBytes: {
      shape: {
        type: "integer"
      }
    },
    BackupVaultName: {
      shape: {
        type: "string"
      }
    }
  }
};
