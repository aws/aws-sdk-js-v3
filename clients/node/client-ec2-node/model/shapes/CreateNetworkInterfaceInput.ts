import { _SecurityGroupIdStringList } from "./_SecurityGroupIdStringList";
import { _InstanceIpv6AddressList } from "./_InstanceIpv6AddressList";
import { _PrivateIpAddressSpecificationList } from "./_PrivateIpAddressSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNetworkInterfaceInput: _Structure_ = {
  type: "structure",
  required: ["SubnetId"],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
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
      locationName: "ipv6Addresses"
    },
    PrivateIpAddress: {
      shape: {
        type: "string"
      },
      locationName: "privateIpAddress"
    },
    PrivateIpAddresses: {
      shape: _PrivateIpAddressSpecificationList,
      locationName: "privateIpAddresses"
    },
    SecondaryPrivateIpAddressCount: {
      shape: {
        type: "integer"
      },
      locationName: "secondaryPrivateIpAddressCount"
    },
    InterfaceType: {
      shape: {
        type: "string"
      }
    },
    SubnetId: {
      shape: {
        type: "string"
      },
      locationName: "subnetId"
    }
  }
};
