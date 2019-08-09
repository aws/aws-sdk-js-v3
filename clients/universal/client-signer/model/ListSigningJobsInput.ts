import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSigningJobsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    status: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "status"
    },
    platformId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "platformId"
    },
    requestedBy: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "requestedBy"
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
