import { _AddressBook } from "./_AddressBook";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAddressBookOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AddressBook: {
      shape: _AddressBook
    }
  }
};
