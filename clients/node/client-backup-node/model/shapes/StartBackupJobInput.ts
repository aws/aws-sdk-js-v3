import { _Lifecycle } from "./_Lifecycle";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartBackupJobInput: _Structure_ = {
  type: "structure",
  required: ["BackupVaultName", "ResourceArn", "IamRoleArn"],
  members: {
    BackupVaultName: {
      shape: {
        type: "string"
      }
    },
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    IamRoleArn: {
      shape: {
        type: "string"
      }
    },
    IdempotencyToken: {
      shape: {
        type: "string"
      }
    },
    StartWindowMinutes: {
      shape: {
        type: "integer"
      }
    },
    CompleteWindowMinutes: {
      shape: {
        type: "integer"
      }
    },
    Lifecycle: {
      shape: _Lifecycle
    },
    RecoveryPointTags: {
      shape: _Tags
    }
  }
};
