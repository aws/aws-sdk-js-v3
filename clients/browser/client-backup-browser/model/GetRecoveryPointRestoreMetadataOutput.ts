import { _Metadata } from "./_Metadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRecoveryPointRestoreMetadataOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupVaultArn: {
      shape: {
        type: "string"
      }
    },
    RecoveryPointArn: {
      shape: {
        type: "string"
      }
    },
    RestoreMetadata: {
      shape: _Metadata
    }
  }
};
