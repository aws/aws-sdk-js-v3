import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBackupVaultAccessPolicyOutput: _Structure_ = {
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
    Policy: {
      shape: {
        type: "string"
      }
    }
  }
};
