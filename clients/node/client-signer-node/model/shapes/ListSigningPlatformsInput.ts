import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSigningPlatformsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    category: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "category"
    },
    partner: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "partner"
    },
    target: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "target"
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
