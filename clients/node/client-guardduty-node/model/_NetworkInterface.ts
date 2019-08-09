import { _Ipv6Addresses } from "./_Ipv6Addresses";
import { _PrivateIpAddresses } from "./_PrivateIpAddresses";
import { _SecurityGroups } from "./_SecurityGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkInterface: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Ipv6Addresses: {
      shape: _Ipv6Addresses,
      locationName: "ipv6Addresses"
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
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
      shape: _PrivateIpAddresses,
      locationName: "privateIpAddresses"
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
    },
    SecurityGroups: {
      shape: _SecurityGroups,
      locationName: "securityGroups"
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
    }
  }
};
