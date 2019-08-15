import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateContactFromAddressBookInput: _Structure_ = {
  type: "structure",
  required: ["ContactArn", "AddressBookArn"],
  members: {
    ContactArn: {
      shape: {
        type: "string"
      }
    },
    AddressBookArn: {
      shape: {
        type: "string"
      }
    }
  }
};
