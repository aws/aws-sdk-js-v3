import { _PhoneNumberOrder } from "./_PhoneNumberOrder";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePhoneNumberOrderOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PhoneNumberOrder: {
      shape: _PhoneNumberOrder
    }
  }
};
