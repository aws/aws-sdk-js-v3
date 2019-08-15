import { _LaunchTemplateSpecification } from "./_LaunchTemplateSpecification";
import { _MixedInstancesPolicy } from "./_MixedInstancesPolicy";
import { _AvailabilityZones } from "./_AvailabilityZones";
import { _LoadBalancerNames } from "./_LoadBalancerNames";
import { _TargetGroupARNs } from "./_TargetGroupARNs";
import { _TerminationPolicies } from "./_TerminationPolicies";
import { _LifecycleHookSpecifications } from "./_LifecycleHookSpecifications";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAutoScalingGroupInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName", "MinSize", "MaxSize"],
  members: {
    AutoScalingGroupName: {
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
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      }
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
    TerminationPolicies: {
      shape: _TerminationPolicies
    },
    NewInstancesProtectedFromScaleIn: {
      shape: {
        type: "boolean"
      }
    },
    LifecycleHookSpecificationList: {
      shape: _LifecycleHookSpecifications
    },
    Tags: {
      shape: _Tags
    },
    ServiceLinkedRoleARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
