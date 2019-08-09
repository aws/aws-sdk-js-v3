import { _ResourceList } from "./_ResourceList";
import { _Dimensions } from "./_Dimensions";
import { _MetricDataQueries } from "./_MetricDataQueries";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutMetricAlarmInput: _Structure_ = {
  type: "structure",
  required: ["AlarmName", "EvaluationPeriods", "ComparisonOperator"],
  members: {
    AlarmName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AlarmDescription: {
      shape: {
        type: "string"
      }
    },
    ActionsEnabled: {
      shape: {
        type: "boolean"
      }
    },
    OKActions: {
      shape: _ResourceList
    },
    AlarmActions: {
      shape: _ResourceList
    },
    InsufficientDataActions: {
      shape: _ResourceList
    },
    MetricName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Namespace: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Statistic: {
      shape: {
        type: "string"
      }
    },
    ExtendedStatistic: {
      shape: {
        type: "string"
      }
    },
    Dimensions: {
      shape: _Dimensions
    },
    Period: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Unit: {
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
    DatapointsToAlarm: {
      shape: {
        type: "integer",
        min: 1
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
    TreatMissingData: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EvaluateLowSampleCountPercentile: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Metrics: {
      shape: _MetricDataQueries
    },
    Tags: {
      shape: _TagList
    },
    ThresholdMetricId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
