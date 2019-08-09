import { _LaunchTemplateSpecification } from "./_LaunchTemplateSpecification";
import { _MixedInstancesPolicy } from "./_MixedInstancesPolicy";
import { _AvailabilityZones } from "./_AvailabilityZones";
import { _TerminationPolicies } from "./_TerminationPolicies";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAutoScalingGroupInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName"],
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
    ServiceLinkedRoleARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
