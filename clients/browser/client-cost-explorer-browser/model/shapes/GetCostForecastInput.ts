import { _DateInterval } from "./_DateInterval";
import { _Expression } from "./_Expression";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCostForecastInput: _Structure_ = {
  type: "structure",
  required: ["TimePeriod", "Metric", "Granularity"],
  members: {
    TimePeriod: {
      shape: _DateInterval
    },
    Metric: {
      shape: {
        type: "string"
      }
    },
    Granularity: {
      shape: {
        type: "string"
      }
    },
    Filter: {
      shape: _Expression
    },
    PredictionIntervalLevel: {
      shape: {
        type: "integer",
        min: 51
      }
    }
  }
};
