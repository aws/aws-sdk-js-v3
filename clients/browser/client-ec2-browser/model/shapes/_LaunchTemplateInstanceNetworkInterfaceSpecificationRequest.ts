import { _SecurityGroupIdStringList } from "./_SecurityGroupIdStringList";
import { _InstanceIpv6AddressListRequest } from "./_InstanceIpv6AddressListRequest";
import { _PrivateIpAddressSpecificationList } from "./_PrivateIpAddressSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateInstanceNetworkInterfaceSpecificationRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociatePublicIpAddress: {
      shape: {
        type: "boolean"
      }
    },
    DeleteOnTermination: {
      shape: {
        type: "boolean"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    DeviceIndex: {
      shape: {
        type: "integer"
      }
    },
    Groups: {
      shape: _SecurityGroupIdStringList,
      locationName: "SecurityGroupId"
    },
    InterfaceType: {
      shape: {
        type: "string"
      }
    },
    Ipv6AddressCount: {
      shape: {
        type: "integer"
      }
    },
    Ipv6Addresses: {
      shape: _InstanceIpv6AddressListRequest
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      }
    },
    PrivateIpAddress: {
      shape: {
        type: "string"
      }
    },
    PrivateIpAddresses: {
      shape: _PrivateIpAddressSpecificationList
    },
    SecondaryPrivateIpAddressCount: {
      shape: {
        type: "integer"
      }
    },
    SubnetId: {
      shape: {
        type: "string"
      }
    }
  }
};
