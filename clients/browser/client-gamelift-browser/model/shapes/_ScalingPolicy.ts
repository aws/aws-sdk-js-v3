import { _TargetConfiguration } from "./_TargetConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScalingPolicy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    ScalingAdjustment: {
      shape: {
        type: "integer"
      }
    },
    ScalingAdjustmentType: {
      shape: {
        type: "string"
      }
    },
    ComparisonOperator: {
      shape: {
        type: "string"
      }
    },
    Threshold: {
      shape: {
        type: "float"
      }
    },
    EvaluationPeriods: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    MetricName: {
      shape: {
        type: "string"
      }
    },
    PolicyType: {
      shape: {
        type: "string"
      }
    },
    TargetConfiguration: {
      shape: _TargetConfiguration
    }
  }
};
