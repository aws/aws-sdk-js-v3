import { _TargetTrackingConfigurations } from "./_TargetTrackingConfigurations";
import { _PredefinedLoadMetricSpecification } from "./_PredefinedLoadMetricSpecification";
import { _CustomizedLoadMetricSpecification } from "./_CustomizedLoadMetricSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScalingInstruction: _Structure_ = {
  type: "structure",
  required: [
    "ServiceNamespace",
    "ResourceId",
    "ScalableDimension",
    "MinCapacity",
    "MaxCapacity",
    "TargetTrackingConfigurations"
  ],
  members: {
    ServiceNamespace: {
      shape: {
        type: "string"
      }
    },
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScalableDimension: {
      shape: {
        type: "string"
      }
    },
    MinCapacity: {
      shape: {
        type: "integer"
      }
    },
    MaxCapacity: {
      shape: {
        type: "integer"
      }
    },
    TargetTrackingConfigurations: {
      shape: _TargetTrackingConfigurations
    },
    PredefinedLoadMetricSpecification: {
      shape: _PredefinedLoadMetricSpecification
    },
    CustomizedLoadMetricSpecification: {
      shape: _CustomizedLoadMetricSpecification
    },
    ScheduledActionBufferTime: {
      shape: {
        type: "integer"
      }
    },
    PredictiveScalingMaxCapacityBehavior: {
      shape: {
        type: "string"
      }
    },
    PredictiveScalingMaxCapacityBuffer: {
      shape: {
        type: "integer"
      }
    },
    PredictiveScalingMode: {
      shape: {
        type: "string"
      }
    },
    ScalingPolicyUpdateBehavior: {
      shape: {
        type: "string"
      }
    },
    DisableDynamicScaling: {
      shape: {
        type: "boolean"
      }
    }
  }
};
