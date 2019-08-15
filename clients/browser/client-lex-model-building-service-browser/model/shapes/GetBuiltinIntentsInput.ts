import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBuiltinIntentsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    locale: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "locale"
    },
    signatureContains: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "signatureContains"
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
