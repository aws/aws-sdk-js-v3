import { _Ipv6AddressList } from "./_Ipv6AddressList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UnassignIpv6AddressesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    },
    UnassignedIpv6Addresses: {
      shape: _Ipv6AddressList,
      locationName: "unassignedIpv6Addresses"
    }
  }
};
