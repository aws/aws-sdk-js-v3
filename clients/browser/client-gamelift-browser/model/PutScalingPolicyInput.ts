import { _TargetConfiguration } from "./_TargetConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutScalingPolicyInput: _Structure_ = {
  type: "structure",
  required: ["Name", "FleetId", "MetricName"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FleetId: {
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
    Threshold: {
      shape: {
        type: "float"
      }
    },
    ComparisonOperator: {
      shape: {
        type: "string"
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
