import { _VerificationAttributes } from "./_VerificationAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIdentityVerificationAttributesOutput: _Structure_ = {
  type: "structure",
  required: ["VerificationAttributes"],
  members: {
    VerificationAttributes: {
      shape: _VerificationAttributes
    }
  }
};
