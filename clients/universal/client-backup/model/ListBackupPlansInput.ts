import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBackupPlansInput: _Structure_ = {
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
    IncludeDeleted: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "includeDeleted"
    }
  }
};
