import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListQueuesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ListBy: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "listBy"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
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
    },
    Order: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "order"
    }
  }
};
