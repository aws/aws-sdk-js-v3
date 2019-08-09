import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBackupJobsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    ByState: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "state"
    },
    ByBackupVaultName: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "backupVaultName"
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
    },
    ByResourceType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "resourceType"
    }
  }
};
