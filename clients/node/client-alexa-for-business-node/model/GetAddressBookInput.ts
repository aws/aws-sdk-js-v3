import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAddressBookInput: _Structure_ = {
  type: "structure",
  required: ["AddressBookArn"],
  members: {
    AddressBookArn: {
      shape: {
        type: "string"
      }
    }
  }
};
