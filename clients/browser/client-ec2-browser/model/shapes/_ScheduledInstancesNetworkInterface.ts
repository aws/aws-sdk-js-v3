import { _ScheduledInstancesSecurityGroupIdSet } from "./_ScheduledInstancesSecurityGroupIdSet";
import { _ScheduledInstancesIpv6AddressList } from "./_ScheduledInstancesIpv6AddressList";
import { _PrivateIpAddressConfigSet } from "./_PrivateIpAddressConfigSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduledInstancesNetworkInterface: _Structure_ = {
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
      shape: _ScheduledInstancesSecurityGroupIdSet,
      locationName: "Group"
    },
    Ipv6AddressCount: {
      shape: {
        type: "integer"
      }
    },
    Ipv6Addresses: {
      shape: _ScheduledInstancesIpv6AddressList,
      locationName: "Ipv6Address"
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
    PrivateIpAddressConfigs: {
      shape: _PrivateIpAddressConfigSet,
      locationName: "PrivateIpAddressConfig"
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
