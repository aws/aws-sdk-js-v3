import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAddressBookInput: _Structure_ = {
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
