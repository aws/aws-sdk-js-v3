import { _PhoneNumberList } from "./_PhoneNumberList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPhoneNumbersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PhoneNumbers: {
      shape: _PhoneNumberList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
