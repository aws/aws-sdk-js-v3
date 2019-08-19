import { _ResourceList } from "./_ResourceList";
import { _Dimensions } from "./_Dimensions";
import { _MetricDataQueries } from "./_MetricDataQueries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricAlarm: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AlarmName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AlarmArn: {
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
    AlarmConfigurationUpdatedTimestamp: {
      shape: {
        type: "timestamp"
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
    StateValue: {
      shape: {
        type: "string"
      }
    },
    StateReason: {
      shape: {
        type: "string"
      }
    },
    StateReasonData: {
      shape: {
        type: "string"
      }
    },
    StateUpdatedTimestamp: {
      shape: {
        type: "timestamp"
      }
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
    ThresholdMetricId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
