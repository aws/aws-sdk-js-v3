import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CidrAuthorizationContext: _Structure_ = {
  type: "structure",
  required: ["Message", "Signature"],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    Signature: {
      shape: {
        type: "string"
      }
    }
  }
};
