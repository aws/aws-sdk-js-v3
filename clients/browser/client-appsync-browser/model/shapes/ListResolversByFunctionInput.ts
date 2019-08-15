import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResolversByFunctionInput: _Structure_ = {
  type: "structure",
  required: ["apiId", "functionId"],
  members: {
    apiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    functionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "functionId"
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
