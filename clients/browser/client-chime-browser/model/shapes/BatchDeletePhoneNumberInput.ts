import { _NonEmptyStringList } from "./_NonEmptyStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeletePhoneNumberInput: _Structure_ = {
  type: "structure",
  required: ["PhoneNumberIds"],
  members: {
    PhoneNumberIds: {
      shape: _NonEmptyStringList
    }
  }
};
