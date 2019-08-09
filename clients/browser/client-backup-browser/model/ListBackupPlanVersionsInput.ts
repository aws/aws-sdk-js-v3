import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBackupPlanVersionsInput: _Structure_ = {
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
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    }
  }
};
