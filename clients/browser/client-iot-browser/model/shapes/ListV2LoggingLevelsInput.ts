import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListV2LoggingLevelsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    targetType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "targetType"
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
