import { _InstanceNetworkInterfaceAssociation } from "./_InstanceNetworkInterfaceAssociation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstancePrivateIpAddress: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Association: {
      shape: _InstanceNetworkInterfaceAssociation,
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
