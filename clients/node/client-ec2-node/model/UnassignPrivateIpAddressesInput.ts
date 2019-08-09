import { _PrivateIpAddressStringList } from "./_PrivateIpAddressStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UnassignPrivateIpAddressesInput: _Structure_ = {
  type: "structure",
  required: ["NetworkInterfaceId", "PrivateIpAddresses"],
  members: {
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    },
    PrivateIpAddresses: {
      shape: _PrivateIpAddressStringList,
      locationName: "privateIpAddress"
    }
  }
};
