import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRecoveryPointsByBackupVaultInput: _Structure_ = {
  type: "structure",
  required: ["BackupVaultName"],
  members: {
    BackupVaultName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "backupVaultName"
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
    },
    ByResourceArn: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "resourceArn"
    },
    ByResourceType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "resourceType"
    },
    ByBackupPlanId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "backupPlanId"
    },
    ByCreatedBefore: {
      shape: {
        type: "timestamp"
      },
      location: "querystring",
      locationName: "createdBefore"
    },
    ByCreatedAfter: {
      shape: {
        type: "timestamp"
      },
      location: "querystring",
      locationName: "createdAfter"
    }
  }
};
