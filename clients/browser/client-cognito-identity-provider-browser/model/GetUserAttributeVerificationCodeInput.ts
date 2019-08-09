import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUserAttributeVerificationCodeInput: _Structure_ = {
  type: "structure",
  required: ["AccessToken", "AttributeName"],
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
    }
  }
};
