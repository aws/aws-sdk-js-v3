import { _InstanceNetworkInterfaceAssociation } from "./_InstanceNetworkInterfaceAssociation";
import { _InstanceNetworkInterfaceAttachment } from "./_InstanceNetworkInterfaceAttachment";
import { _GroupIdentifierList } from "./_GroupIdentifierList";
import { _InstanceIpv6AddressList } from "./_InstanceIpv6AddressList";
import { _InstancePrivateIpAddressList } from "./_InstancePrivateIpAddressList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceNetworkInterface: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Association: {
      shape: _InstanceNetworkInterfaceAssociation,
      locationName: "association"
    },
    Attachment: {
      shape: _InstanceNetworkInterfaceAttachment,
      locationName: "attachment"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Groups: {
      shape: _GroupIdentifierList,
      locationName: "groupSet"
    },
    Ipv6Addresses: {
      shape: _InstanceIpv6AddressList,
      locationName: "ipv6AddressesSet"
    },
    MacAddress: {
      shape: {
        type: "string"
      },
      locationName: "macAddress"
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
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
    },
    PrivateIpAddresses: {
      shape: _InstancePrivateIpAddressList,
      locationName: "privateIpAddressesSet"
    },
    SourceDestCheck: {
      shape: {
        type: "boolean"
      },
      locationName: "sourceDestCheck"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    },
    SubnetId: {
      shape: {
        type: "string"
      },
      locationName: "subnetId"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    },
    InterfaceType: {
      shape: {
        type: "string"
      },
      locationName: "interfaceType"
    }
  }
};
