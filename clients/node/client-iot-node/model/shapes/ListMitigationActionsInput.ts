import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMitigationActionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    actionType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "actionType"
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    },
    nextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    }
  }
};
