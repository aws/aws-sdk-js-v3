import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDatasetsInput: _Structure_ = {
  type: "structure",
  required: ["IdentityId", "IdentityPoolId"],
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
    }
  }
};
