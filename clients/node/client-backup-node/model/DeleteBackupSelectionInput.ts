import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBackupSelectionInput: _Structure_ = {
  type: "structure",
  required: ["BackupPlanId", "SelectionId"],
  members: {
    BackupPlanId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "backupPlanId"
    },
    SelectionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "selectionId"
    }
  }
};
