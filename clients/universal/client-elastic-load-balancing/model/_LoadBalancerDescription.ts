import { _ListenerDescriptions } from "./_ListenerDescriptions";
import { _Policies } from "./_Policies";
import { _BackendServerDescriptions } from "./_BackendServerDescriptions";
import { _AvailabilityZones } from "./_AvailabilityZones";
import { _Subnets } from "./_Subnets";
import { _Instances } from "./_Instances";
import { _HealthCheck } from "./_HealthCheck";
import { _SourceSecurityGroup } from "./_SourceSecurityGroup";
import { _SecurityGroups } from "./_SecurityGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancerDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    DNSName: {
      shape: {
        type: "string"
      }
    },
    CanonicalHostedZoneName: {
      shape: {
        type: "string"
      }
    },
    CanonicalHostedZoneNameID: {
      shape: {
        type: "string"
      }
    },
    ListenerDescriptions: {
      shape: _ListenerDescriptions
    },
    Policies: {
      shape: _Policies
    },
    BackendServerDescriptions: {
      shape: _BackendServerDescriptions
    },
    AvailabilityZones: {
      shape: _AvailabilityZones
    },
    Subnets: {
      shape: _Subnets
    },
    VPCId: {
      shape: {
        type: "string"
      }
    },
    Instances: {
      shape: _Instances
    },
    HealthCheck: {
      shape: _HealthCheck
    },
    SourceSecurityGroup: {
      shape: _SourceSecurityGroup
    },
    SecurityGroups: {
      shape: _SecurityGroups
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    Scheme: {
      shape: {
        type: "string"
      }
    }
  }
};
