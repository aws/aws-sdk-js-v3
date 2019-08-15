import { _PhoneNumber } from "./_PhoneNumber";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdatePhoneNumberOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PhoneNumber: {
      shape: _PhoneNumber
    }
  }
};
