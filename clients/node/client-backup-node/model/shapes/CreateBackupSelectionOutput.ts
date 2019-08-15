import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBackupSelectionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SelectionId: {
      shape: {
        type: "string"
      }
    },
    BackupPlanId: {
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
