import { Structure as _Structure_ } from "@aws-sdk/types";

export const FromEmailAddressNotVerifiedException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FromEmailAddress: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "FromEmailAddressNotVerifiedException",
  exceptionCode: "FromEmailAddressNotVerified"
};
