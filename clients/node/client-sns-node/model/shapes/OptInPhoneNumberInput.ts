import { Structure as _Structure_ } from "@aws-sdk/types";

export const OptInPhoneNumberInput: _Structure_ = {
  type: "structure",
  required: ["phoneNumber"],
  members: {
    phoneNumber: {
      shape: {
        type: "string"
      }
    }
  }
};
