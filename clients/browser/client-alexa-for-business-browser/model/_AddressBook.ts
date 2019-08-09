import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AddressBook: _Structure_ = {
  type: "structure",
  required: [],
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
