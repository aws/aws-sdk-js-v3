import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIntegrationResponsesInput: _Structure_ = {
  type: "structure",
  required: ["IntegrationId", "ApiId"],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    IntegrationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "integrationId"
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
