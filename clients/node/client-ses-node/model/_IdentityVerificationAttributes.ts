import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IdentityVerificationAttributes: _Structure_ = {
  type: "structure",
  required: ["VerificationStatus"],
  members: {
    VerificationStatus: {
      shape: {
        type: "string"
      }
    },
    VerificationToken: {
      shape: {
        type: "string"
      }
    }
  }
};
