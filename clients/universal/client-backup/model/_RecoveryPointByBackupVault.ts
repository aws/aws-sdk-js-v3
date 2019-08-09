import { _RecoveryPointCreator } from "./_RecoveryPointCreator";
import { _CalculatedLifecycle } from "./_CalculatedLifecycle";
import { _Lifecycle } from "./_Lifecycle";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RecoveryPointByBackupVault: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RecoveryPointArn: {
      shape: {
        type: "string"
      }
    },
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
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    CreatedBy: {
      shape: _RecoveryPointCreator
    },
    IamRoleArn: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    CompletionDate: {
      shape: {
        type: "timestamp"
      }
    },
    BackupSizeInBytes: {
      shape: {
        type: "integer"
      }
    },
    CalculatedLifecycle: {
      shape: _CalculatedLifecycle
    },
    Lifecycle: {
      shape: _Lifecycle
    },
    EncryptionKeyArn: {
      shape: {
        type: "string"
      }
    },
    IsEncrypted: {
      shape: {
        type: "boolean"
      }
    },
    LastRestoreTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
