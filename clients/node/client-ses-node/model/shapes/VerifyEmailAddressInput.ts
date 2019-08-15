import { Structure as _Structure_ } from "@aws-sdk/types";

export const VerifyEmailAddressInput: _Structure_ = {
  type: "structure",
  required: ["EmailAddress"],
  members: {
    EmailAddress: {
      shape: {
        type: "string"
      }
    }
  }
};
