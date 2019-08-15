import { _LaunchTemplateSpecification } from "./_LaunchTemplateSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Instance: _Structure_ = {
  type: "structure",
  required: [
    "InstanceId",
    "AvailabilityZone",
    "LifecycleState",
    "HealthStatus",
    "ProtectedFromScaleIn"
  ],
  members: {
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LifecycleState: {
      shape: {
        type: "string"
      }
    },
    HealthStatus: {
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
    ProtectedFromScaleIn: {
      shape: {
        type: "boolean"
      }
    }
  }
};
