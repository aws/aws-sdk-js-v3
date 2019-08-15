import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    },
    Queue: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "queue"
    },
    Status: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "status"
    }
  }
};
