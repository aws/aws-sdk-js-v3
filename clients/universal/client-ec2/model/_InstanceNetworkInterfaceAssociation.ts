import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceNetworkInterfaceAssociation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IpOwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ipOwnerId"
    },
    PublicDnsName: {
      shape: {
        type: "string"
      },
      locationName: "publicDnsName"
    },
    PublicIp: {
      shape: {
        type: "string"
      },
      locationName: "publicIp"
    }
  }
};
