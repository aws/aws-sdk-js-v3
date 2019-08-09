import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListActiveViolationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "thingName"
    },
    securityProfileName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "securityProfileName"
    },
    nextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    }
  }
};
