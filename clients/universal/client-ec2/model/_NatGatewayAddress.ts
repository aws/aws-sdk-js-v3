import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NatGatewayAddress: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AllocationId: {
      shape: {
        type: "string"
      },
      locationName: "allocationId"
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    },
    PrivateIp: {
      shape: {
        type: "string"
      },
      locationName: "privateIp"
    },
    PublicIp: {
      shape: {
        type: "string"
      },
      locationName: "publicIp"
    }
  }
};
