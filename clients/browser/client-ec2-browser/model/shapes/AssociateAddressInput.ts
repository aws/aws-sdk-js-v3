import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateAddressInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AllocationId: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    PublicIp: {
      shape: {
        type: "string"
      }
    },
    AllowReassociation: {
      shape: {
        type: "boolean"
      },
      locationName: "allowReassociation"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    },
    PrivateIpAddress: {
      shape: {
        type: "string"
      },
      locationName: "privateIpAddress"
    }
  }
};
