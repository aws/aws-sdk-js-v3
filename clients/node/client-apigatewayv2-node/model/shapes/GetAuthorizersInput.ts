import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAuthorizersInput: _Structure_ = {
  type: "structure",
  required: ["ApiId"],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    MaxResults: {
      shape: {
        type: "string"
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
