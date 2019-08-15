import { _BackupSelection } from "./_BackupSelection";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBackupSelectionInput: _Structure_ = {
  type: "structure",
  required: ["BackupPlanId", "BackupSelection"],
  members: {
    BackupPlanId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "backupPlanId"
    },
    BackupSelection: {
      shape: _BackupSelection
    },
    CreatorRequestId: {
      shape: {
        type: "string"
      }
    }
  }
};
