import { _Ipv6AddressList } from "./_Ipv6AddressList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssignIpv6AddressesInput: _Structure_ = {
  type: "structure",
  required: ["NetworkInterfaceId"],
  members: {
    Ipv6AddressCount: {
      shape: {
        type: "integer"
      },
      locationName: "ipv6AddressCount"
    },
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
