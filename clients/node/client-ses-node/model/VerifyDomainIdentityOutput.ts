import { Structure as _Structure_ } from "@aws-sdk/types";

export const VerifyDomainIdentityOutput: _Structure_ = {
  type: "structure",
  required: ["VerificationToken"],
  members: {
    VerificationToken: {
      shape: {
        type: "string"
      }
    }
  }
};
