import { _E164PhoneNumberList } from "./_E164PhoneNumberList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchAvailablePhoneNumbersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    E164PhoneNumbers: {
      shape: _E164PhoneNumberList
    }
  }
};
