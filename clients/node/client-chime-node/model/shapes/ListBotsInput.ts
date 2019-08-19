import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBotsInput: _Structure_ = {
  type: "structure",
  required: ["AccountId"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "accountId"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "max-results"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "next-token"
    }
  }
};
