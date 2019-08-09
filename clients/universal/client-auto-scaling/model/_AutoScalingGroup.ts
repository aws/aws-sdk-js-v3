import { _LaunchTemplateSpecification } from "./_LaunchTemplateSpecification";
import { _MixedInstancesPolicy } from "./_MixedInstancesPolicy";
import { _AvailabilityZones } from "./_AvailabilityZones";
import { _LoadBalancerNames } from "./_LoadBalancerNames";
import { _TargetGroupARNs } from "./_TargetGroupARNs";
import { _Instances } from "./_Instances";
import { _SuspendedProcesses } from "./_SuspendedProcesses";
import { _EnabledMetrics } from "./_EnabledMetrics";
import { _TagDescriptionList } from "./_TagDescriptionList";
import { _TerminationPolicies } from "./_TerminationPolicies";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AutoScalingGroup: _Structure_ = {
  type: "structure",
  required: [
    "AutoScalingGroupName",
    "MinSize",
    "MaxSize",
    "DesiredCapacity",
    "DefaultCooldown",
    "AvailabilityZones",
    "HealthCheckType",
    "CreatedTime"
  ],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AutoScalingGroupARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LaunchConfigurationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LaunchTemplate: {
      shape: _LaunchTemplateSpecification
    },
    MixedInstancesPolicy: {
      shape: _MixedInstancesPolicy
    },
    MinSize: {
      shape: {
        type: "integer"
      }
    },
    MaxSize: {
      shape: {
        type: "integer"
      }
    },
    DesiredCapacity: {
      shape: {
        type: "integer"
      }
    },
    DefaultCooldown: {
      shape: {
        type: "integer"
      }
    },
    AvailabilityZones: {
      shape: _AvailabilityZones
    },
    LoadBalancerNames: {
      shape: _LoadBalancerNames
    },
    TargetGroupARNs: {
      shape: _TargetGroupARNs
    },
    HealthCheckType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HealthCheckGracePeriod: {
      shape: {
        type: "integer"
      }
    },
    Instances: {
      shape: _Instances
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    SuspendedProcesses: {
      shape: _SuspendedProcesses
    },
    PlacementGroup: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VPCZoneIdentifier: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EnabledMetrics: {
      shape: _EnabledMetrics
    },
    Status: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagDescriptionList
    },
    TerminationPolicies: {
      shape: _TerminationPolicies
    },
    NewInstancesProtectedFromScaleIn: {
      shape: {
        type: "boolean"
      }
    },
    ServiceLinkedRoleARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
