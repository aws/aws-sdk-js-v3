import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRecordsInput: _Structure_ = {
  type: "structure",
  required: ["IdentityPoolId", "IdentityId", "DatasetName"],
  members: {
    IdentityPoolId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "IdentityPoolId"
    },
    IdentityId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "IdentityId"
    },
    DatasetName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "DatasetName"
    },
    LastSyncCount: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "lastSyncCount"
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
        type: "integer"
      },
      location: "querystring",
      locationName: "maxResults"
    },
    SyncSessionToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "syncSessionToken"
    }
  }
};
