import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkInterfaceAssociation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AllocationId: {
      shape: {
        type: "string"
      },
      locationName: "allocationId"
    },
    AssociationId: {
      shape: {
        type: "string"
      },
      locationName: "associationId"
    },
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
