import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTargetsForSecurityProfileInput: _Structure_ = {
  type: "structure",
  required: ["securityProfileName"],
  members: {
    securityProfileName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
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
