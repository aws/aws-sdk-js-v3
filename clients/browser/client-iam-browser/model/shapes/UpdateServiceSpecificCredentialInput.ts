import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateServiceSpecificCredentialInput: _Structure_ = {
  type: "structure",
  required: ["ServiceSpecificCredentialId", "Status"],
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
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
