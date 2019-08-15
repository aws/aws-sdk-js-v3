import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBackupVaultOutput: _Structure_ = {
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
    EncryptionKeyArn: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    CreatorRequestId: {
      shape: {
        type: "string"
      }
    },
    NumberOfRecoveryPoints: {
      shape: {
        type: "integer"
      }
    }
  }
};
