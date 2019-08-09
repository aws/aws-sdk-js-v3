import { _DnsEntrySet } from "./_DnsEntrySet";
import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpcEndpointConnection: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceId: {
      shape: {
        type: "string"
      },
      locationName: "serviceId"
    },
    VpcEndpointId: {
      shape: {
        type: "string"
      },
      locationName: "vpcEndpointId"
    },
    VpcEndpointOwner: {
      shape: {
        type: "string"
      },
      locationName: "vpcEndpointOwner"
    },
    VpcEndpointState: {
      shape: {
        type: "string"
      },
      locationName: "vpcEndpointState"
    },
    CreationTimestamp: {
      shape: {
        type: "timestamp"
      },
      locationName: "creationTimestamp"
    },
    DnsEntries: {
      shape: _DnsEntrySet,
      locationName: "dnsEntrySet"
    },
    NetworkLoadBalancerArns: {
      shape: _ValueStringList,
      locationName: "networkLoadBalancerArnSet"
    }
  }
};
