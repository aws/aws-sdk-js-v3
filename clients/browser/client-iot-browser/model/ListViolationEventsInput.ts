import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListViolationEventsInput: _Structure_ = {
  type: "structure",
  required: ["startTime", "endTime"],
  members: {
    startTime: {
      shape: {
        type: "timestamp"
      },
      location: "querystring",
      locationName: "startTime"
    },
    endTime: {
      shape: {
        type: "timestamp"
      },
      location: "querystring",
      locationName: "endTime"
    },
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
