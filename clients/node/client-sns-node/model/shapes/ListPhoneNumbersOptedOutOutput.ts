import { _PhoneNumberList } from "./_PhoneNumberList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPhoneNumbersOptedOutOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    phoneNumbers: {
      shape: _PhoneNumberList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
