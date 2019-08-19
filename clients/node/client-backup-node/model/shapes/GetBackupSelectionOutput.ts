import { _BackupSelection } from "./_BackupSelection";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBackupSelectionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupSelection: {
      shape: _BackupSelection
    },
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
    },
    CreatorRequestId: {
      shape: {
        type: "string"
      }
    }
  }
};
