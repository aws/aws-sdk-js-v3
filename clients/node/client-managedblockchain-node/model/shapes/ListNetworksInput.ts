import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListNetworksInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "name"
    },
    Framework: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "framework"
    },
    Status: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "status"
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
