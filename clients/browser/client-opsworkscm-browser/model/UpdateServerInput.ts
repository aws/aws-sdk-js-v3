import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateServerInput: _Structure_ = {
  type: "structure",
  required: ["ServerName"],
  members: {
    DisableAutomatedBackup: {
      shape: {
        type: "boolean"
      }
    },
    BackupRetentionCount: {
      shape: {
        type: "integer"
      }
    },
    ServerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
      }
    },
    PreferredBackupWindow: {
      shape: {
        type: "string"
      }
    }
  }
};
