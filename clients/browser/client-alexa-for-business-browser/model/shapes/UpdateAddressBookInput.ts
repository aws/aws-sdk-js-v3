import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAddressBookInput: _Structure_ = {
  type: "structure",
  required: ["AddressBookArn"],
  members: {
    AddressBookArn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
