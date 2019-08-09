import { Structure as _Structure_ } from "@aws-sdk/types";

export const VerifyUserAttributeInput: _Structure_ = {
  type: "structure",
  required: ["AccessToken", "AttributeName", "Code"],
  members: {
    AccessToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    AttributeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Code: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
