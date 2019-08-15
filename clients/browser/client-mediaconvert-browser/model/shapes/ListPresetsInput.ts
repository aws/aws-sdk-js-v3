import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPresetsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Category: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "category"
    },
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
