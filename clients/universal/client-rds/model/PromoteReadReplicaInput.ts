import { Structure as _Structure_ } from "@aws-sdk/types";

export const PromoteReadReplicaInput: _Structure_ = {
  type: "structure",
  required: ["DBInstanceIdentifier"],
  members: {
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    BackupRetentionPeriod: {
      shape: {
        type: "integer"
      }
    },
    PreferredBackupWindow: {
      shape: {
        type: "string"
      }
    }
  }
};
