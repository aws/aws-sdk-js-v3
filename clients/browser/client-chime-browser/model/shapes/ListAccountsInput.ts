import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAccountsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "name"
    },
    UserEmail: {
      shape: {
        type: "string",
        sensitive: true
      },
      location: "querystring",
      locationName: "user-email"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "next-token"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "max-results"
    }
  }
};
