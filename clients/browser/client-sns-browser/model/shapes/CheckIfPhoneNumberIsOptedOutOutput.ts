import { Structure as _Structure_ } from "@aws-sdk/types";

export const CheckIfPhoneNumberIsOptedOutOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    isOptedOut: {
      shape: {
        type: "boolean"
      }
    }
  }
};
