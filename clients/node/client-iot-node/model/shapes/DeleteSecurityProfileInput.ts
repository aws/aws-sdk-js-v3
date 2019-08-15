import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSecurityProfileInput: _Structure_ = {
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
    expectedVersion: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "expectedVersion"
    }
  }
};
