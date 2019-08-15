import { _NetworkInterfaceAssociation } from "./_NetworkInterfaceAssociation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkInterfacePrivateIpAddress: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Association: {
      shape: _NetworkInterfaceAssociation,
      locationName: "association"
    },
    Primary: {
      shape: {
        type: "boolean"
      },
      locationName: "primary"
    },
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
