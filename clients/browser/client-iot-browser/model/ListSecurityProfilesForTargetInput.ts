import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSecurityProfilesForTargetInput: _Structure_ = {
  type: "structure",
  required: ["securityProfileTargetArn"],
  members: {
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
    },
    recursive: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "recursive"
    },
    securityProfileTargetArn: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "securityProfileTargetArn"
    }
  }
};
