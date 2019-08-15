import { _PredefinedMetricSpecification } from "./_PredefinedMetricSpecification";
import { _CustomizedMetricSpecification } from "./_CustomizedMetricSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetTrackingScalingPolicyConfiguration: _Structure_ = {
  type: "structure",
  required: ["TargetValue"],
  members: {
    TargetValue: {
      shape: {
        type: "float"
      }
    },
    PredefinedMetricSpecification: {
      shape: _PredefinedMetricSpecification
    },
    CustomizedMetricSpecification: {
      shape: _CustomizedMetricSpecification
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
    DisableScaleIn: {
      shape: {
        type: "boolean"
      }
    }
  }
};
