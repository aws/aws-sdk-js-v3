import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteUserPoolDomainInput: _Structure_ = {
  type: "structure",
  required: ["Domain", "UserPoolId"],
  members: {
    Domain: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
