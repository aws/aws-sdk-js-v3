import { _LoadBalancerState } from "./_LoadBalancerState";
import { _AvailabilityZones } from "./_AvailabilityZones";
import { _SecurityGroups } from "./_SecurityGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoadBalancerArn: {
      shape: {
        type: "string"
      }
    },
    DNSName: {
      shape: {
        type: "string"
      }
    },
    CanonicalHostedZoneId: {
      shape: {
        type: "string"
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    Scheme: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: _LoadBalancerState
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZones: {
      shape: _AvailabilityZones
    },
    SecurityGroups: {
      shape: _SecurityGroups
    },
    IpAddressType: {
      shape: {
        type: "string"
      }
    }
  }
};
