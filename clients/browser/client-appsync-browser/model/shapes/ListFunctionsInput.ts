import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFunctionsInput: _Structure_ = {
  type: "structure",
  required: ["apiId"],
  members: {
    apiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
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
