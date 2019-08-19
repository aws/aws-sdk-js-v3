import { _SecurityGroupIdStringList } from "./_SecurityGroupIdStringList";
import { _InstanceIpv6AddressList } from "./_InstanceIpv6AddressList";
import { _PrivateIpAddressSpecificationList } from "./_PrivateIpAddressSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceNetworkInterfaceSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociatePublicIpAddress: {
      shape: {
        type: "boolean"
      },
      locationName: "associatePublicIpAddress"
    },
    DeleteOnTermination: {
      shape: {
        type: "boolean"
      },
      locationName: "deleteOnTermination"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    DeviceIndex: {
      shape: {
        type: "integer"
      },
      locationName: "deviceIndex"
    },
    Groups: {
      shape: _SecurityGroupIdStringList,
      locationName: "SecurityGroupId"
    },
    Ipv6AddressCount: {
      shape: {
        type: "integer"
      },
      locationName: "ipv6AddressCount"
    },
    Ipv6Addresses: {
      shape: _InstanceIpv6AddressList,
      locationName: "ipv6AddressesSet",
      queryName: "Ipv6Addresses"
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
    },
    PrivateIpAddresses: {
      shape: _PrivateIpAddressSpecificationList,
      locationName: "privateIpAddressesSet",
      queryName: "PrivateIpAddresses"
    },
    SecondaryPrivateIpAddressCount: {
      shape: {
        type: "integer"
      },
      locationName: "secondaryPrivateIpAddressCount"
    },
    SubnetId: {
      shape: {
        type: "string"
      },
      locationName: "subnetId"
    },
    InterfaceType: {
      shape: {
        type: "string"
      }
    }
  }
};
