import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTypesInput: _Structure_ = {
  type: "structure",
  required: ["apiId", "format"],
  members: {
    apiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    format: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "format"
    },
    nextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    },
    maxResults: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "maxResults"
    }
  }
};
