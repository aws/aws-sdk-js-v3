import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMembersInput: _Structure_ = {
  type: "structure",
  required: ["NetworkId"],
  members: {
    NetworkId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "networkId"
    },
    Name: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "name"
    },
    Status: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "status"
    },
    IsOwned: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "isOwned"
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
