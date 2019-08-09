import { _NetworkInterfaceAssociation } from "./_NetworkInterfaceAssociation";
import { _NetworkInterfaceAttachment } from "./_NetworkInterfaceAttachment";
import { _GroupIdentifierList } from "./_GroupIdentifierList";
import { _NetworkInterfaceIpv6AddressesList } from "./_NetworkInterfaceIpv6AddressesList";
import { _NetworkInterfacePrivateIpAddressList } from "./_NetworkInterfacePrivateIpAddressList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkInterface: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Association: {
      shape: _NetworkInterfaceAssociation,
      locationName: "association"
    },
    Attachment: {
      shape: _NetworkInterfaceAttachment,
      locationName: "attachment"
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
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
    InterfaceType: {
      shape: {
        type: "string"
      },
      locationName: "interfaceType"
    },
    Ipv6Addresses: {
      shape: _NetworkInterfaceIpv6AddressesList,
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
      shape: _NetworkInterfacePrivateIpAddressList,
      locationName: "privateIpAddressesSet"
    },
    RequesterId: {
      shape: {
        type: "string"
      },
      locationName: "requesterId"
    },
    RequesterManaged: {
      shape: {
        type: "boolean"
      },
      locationName: "requesterManaged"
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
    TagSet: {
      shape: _TagList,
      locationName: "tagSet"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    }
  }
};
