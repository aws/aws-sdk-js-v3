import { _Metric } from "./_Metric";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricStat: _Structure_ = {
  type: "structure",
  required: ["Metric", "Period", "Stat"],
  members: {
    Metric: {
      shape: _Metric
    },
    Period: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Stat: {
      shape: {
        type: "string"
      }
    },
    Unit: {
      shape: {
        type: "string"
      }
    }
  }
};
