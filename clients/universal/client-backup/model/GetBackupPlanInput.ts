import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBackupPlanInput: _Structure_ = {
  type: "structure",
  required: ["BackupPlanId"],
  members: {
    BackupPlanId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "backupPlanId"
    },
    VersionId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "versionId"
    }
  }
};
