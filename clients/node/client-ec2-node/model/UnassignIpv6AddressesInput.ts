import { _Ipv6AddressList } from "./_Ipv6AddressList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UnassignIpv6AddressesInput: _Structure_ = {
  type: "structure",
  required: ["Ipv6Addresses", "NetworkInterfaceId"],
  members: {
    Ipv6Addresses: {
      shape: _Ipv6AddressList,
      locationName: "ipv6Addresses"
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    }
  }
};
