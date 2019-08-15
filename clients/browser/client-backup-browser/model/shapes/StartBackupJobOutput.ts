import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartBackupJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupJobId: {
      shape: {
        type: "string"
      }
    },
    RecoveryPointArn: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
