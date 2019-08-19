import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUsersInput: _Structure_ = {
  type: "structure",
  required: ["AwsAccountId", "Namespace"],
  members: {
    AwsAccountId: {
      shape: {
        type: "string",
        min: 12
      },
      location: "uri",
      locationName: "AwsAccountId"
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
    },
    Namespace: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Namespace"
    }
  }
};
