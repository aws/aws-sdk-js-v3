import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBackupPlanOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupPlanId: {
      shape: {
        type: "string"
      }
    },
    BackupPlanArn: {
      shape: {
        type: "string"
      }
    },
    DeletionDate: {
      shape: {
        type: "timestamp"
      }
    },
    VersionId: {
      shape: {
        type: "string"
      }
    }
  }
};
