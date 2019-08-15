import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSecurityProfileOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    securityProfileName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    securityProfileArn: {
      shape: {
        type: "string"
      }
    }
  }
};
