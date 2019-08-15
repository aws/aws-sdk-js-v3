import { _PredefinedScalingMetricSpecification } from "./_PredefinedScalingMetricSpecification";
import { _CustomizedScalingMetricSpecification } from "./_CustomizedScalingMetricSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetTrackingConfiguration: _Structure_ = {
  type: "structure",
  required: ["TargetValue"],
  members: {
    PredefinedScalingMetricSpecification: {
      shape: _PredefinedScalingMetricSpecification
    },
    CustomizedScalingMetricSpecification: {
      shape: _CustomizedScalingMetricSpecification
    },
    TargetValue: {
      shape: {
        type: "float"
      }
    },
    DisableScaleIn: {
      shape: {
        type: "boolean"
      }
    },
    ScaleOutCooldown: {
      shape: {
        type: "integer"
      }
    },
    ScaleInCooldown: {
      shape: {
        type: "integer"
      }
    },
    EstimatedInstanceWarmup: {
      shape: {
        type: "integer"
      }
    }
  }
};
