import { _Ipv6AddressList } from "./_Ipv6AddressList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssignIpv6AddressesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssignedIpv6Addresses: {
      shape: _Ipv6AddressList,
      locationName: "assignedIpv6Addresses"
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    }
  }
};
