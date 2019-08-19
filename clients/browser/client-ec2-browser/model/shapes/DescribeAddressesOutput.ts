import { _AddressList } from "./_AddressList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAddressesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Addresses: {
      shape: _AddressList,
      locationName: "addressesSet"
    }
  }
};
