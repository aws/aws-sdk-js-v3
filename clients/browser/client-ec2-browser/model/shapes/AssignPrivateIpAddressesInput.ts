import { _PrivateIpAddressStringList } from "./_PrivateIpAddressStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssignPrivateIpAddressesInput: _Structure_ = {
  type: "structure",
  required: ["NetworkInterfaceId"],
  members: {
    AllowReassignment: {
      shape: {
        type: "boolean"
      },
      locationName: "allowReassignment"
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    },
    PrivateIpAddresses: {
      shape: _PrivateIpAddressStringList,
      locationName: "privateIpAddress"
    },
    SecondaryPrivateIpAddressCount: {
      shape: {
        type: "integer"
      },
      locationName: "secondaryPrivateIpAddressCount"
    }
  }
};
