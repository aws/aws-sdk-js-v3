import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Address: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    PublicIp: {
      shape: {
        type: "string"
      },
      locationName: "publicIp"
    },
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
    Domain: {
      shape: {
        type: "string"
      },
      locationName: "domain"
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    },
    NetworkInterfaceOwnerId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceOwnerId"
    },
    PrivateIpAddress: {
      shape: {
        type: "string"
      },
      locationName: "privateIpAddress"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    },
    PublicIpv4Pool: {
      shape: {
        type: "string"
      },
      locationName: "publicIpv4Pool"
    }
  }
};
