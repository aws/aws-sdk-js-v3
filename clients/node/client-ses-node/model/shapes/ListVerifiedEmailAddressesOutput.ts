import { _AddressList } from "./_AddressList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVerifiedEmailAddressesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VerifiedEmailAddresses: {
      shape: _AddressList
    }
  }
};
