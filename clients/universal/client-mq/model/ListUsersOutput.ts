import { ___listOfUserSummary } from "./___listOfUserSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUsersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BrokerId: {
      shape: {
        type: "string"
      },
      locationName: "brokerId"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      },
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    Users: {
      shape: ___listOfUserSummary,
      locationName: "users"
    }
  }
};
