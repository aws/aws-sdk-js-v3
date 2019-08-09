import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteServiceSpecificCredentialInput: _Structure_ = {
  type: "structure",
  required: ["ServiceSpecificCredentialId"],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServiceSpecificCredentialId: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
