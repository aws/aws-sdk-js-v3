import { _AssignedPrivateIpAddressList } from "./_AssignedPrivateIpAddressList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssignPrivateIpAddressesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    },
    AssignedPrivateIpAddresses: {
      shape: _AssignedPrivateIpAddressList,
      locationName: "assignedPrivateIpAddressesSet"
    }
  }
};
