import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetachSecurityProfileInput: _Structure_ = {
  type: "structure",
  required: ["securityProfileName", "securityProfileTargetArn"],
  members: {
    securityProfileName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "securityProfileName"
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
