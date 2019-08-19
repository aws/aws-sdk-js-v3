import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSigningProfilesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    includeCanceled: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "includeCanceled"
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
