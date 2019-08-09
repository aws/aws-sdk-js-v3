import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PrivateIpAddressDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PrivateDnsName: {
      shape: {
        type: "string"
      },
      locationName: "privateDnsName"
    },
    PrivateIpAddress: {
      shape: {
        type: "string"
      },
      locationName: "privateIpAddress"
    }
  }
};
