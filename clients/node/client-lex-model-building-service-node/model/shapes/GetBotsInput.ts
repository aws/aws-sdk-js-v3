import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBotsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    nextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    },
    nameContains: {
      shape: {
        type: "string",
        min: 2
      },
      location: "querystring",
      locationName: "nameContains"
    }
  }
};
