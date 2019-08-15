import { _PredefinedMetricSpecification } from "./_PredefinedMetricSpecification";
import { _CustomizedMetricSpecification } from "./_CustomizedMetricSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetTrackingConfiguration: _Structure_ = {
  type: "structure",
  required: ["TargetValue"],
  members: {
    PredefinedMetricSpecification: {
      shape: _PredefinedMetricSpecification
    },
    CustomizedMetricSpecification: {
      shape: _CustomizedMetricSpecification
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
    }
  }
};
