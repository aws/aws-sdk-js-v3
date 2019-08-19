import { _PrivateIpAddresses } from "./_PrivateIpAddresses";
import { _Ipv6Addresses } from "./_Ipv6Addresses";
import { _SecurityGroups } from "./_SecurityGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkInterface: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    networkInterfaceId: {
      shape: {
        type: "string"
      }
    },
    subnetId: {
      shape: {
        type: "string"
      }
    },
    vpcId: {
      shape: {
        type: "string"
      }
    },
    privateDnsName: {
      shape: {
        type: "string"
      }
    },
    privateIpAddress: {
      shape: {
        type: "string"
      }
    },
    privateIpAddresses: {
      shape: _PrivateIpAddresses
    },
    publicDnsName: {
      shape: {
        type: "string"
      }
    },
    publicIp: {
      shape: {
        type: "string"
      }
    },
    ipv6Addresses: {
      shape: _Ipv6Addresses
    },
    securityGroups: {
      shape: _SecurityGroups
    }
  }
};
