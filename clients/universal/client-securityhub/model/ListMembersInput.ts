import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMembersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OnlyAssociated: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "OnlyAssociated"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "MaxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "NextToken"
    }
  }
};
