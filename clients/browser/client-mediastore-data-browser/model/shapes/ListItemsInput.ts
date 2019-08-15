import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListItemsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Path: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "Path"
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
