import { _MetricDimensionList } from "./_MetricDimensionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudWatchAlarmDefinition: _Structure_ = {
  type: "structure",
  required: ["ComparisonOperator", "MetricName", "Period", "Threshold"],
  members: {
    ComparisonOperator: {
      shape: {
        type: "string"
      }
    },
    EvaluationPeriods: {
      shape: {
        type: "integer"
      }
    },
    MetricName: {
      shape: {
        type: "string"
      }
    },
    Namespace: {
      shape: {
        type: "string"
      }
    },
    Period: {
      shape: {
        type: "integer"
      }
    },
    Statistic: {
      shape: {
        type: "string"
      }
    },
    Threshold: {
      shape: {
        type: "float"
      }
    },
    Unit: {
      shape: {
        type: "string"
      }
    },
    Dimensions: {
      shape: _MetricDimensionList
    }
  }
};
