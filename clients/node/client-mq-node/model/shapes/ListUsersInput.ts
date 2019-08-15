import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUsersInput: _Structure_ = {
  type: "structure",
  required: ["BrokerId"],
  members: {
    BrokerId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "broker-id"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    }
  }
};
