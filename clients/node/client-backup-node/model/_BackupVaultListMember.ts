import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BackupVaultListMember: _Structure_ = {
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
    CreationDate: {
      shape: {
        type: "timestamp"
      }
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
    },
    NumberOfRecoveryPoints: {
      shape: {
        type: "integer"
      }
    }
  }
};
