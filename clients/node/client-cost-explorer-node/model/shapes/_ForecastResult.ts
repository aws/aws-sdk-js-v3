import { _DateInterval } from "./_DateInterval";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ForecastResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TimePeriod: {
      shape: _DateInterval
    },
    MeanValue: {
      shape: {
        type: "string"
      }
    },
    PredictionIntervalLowerBound: {
      shape: {
        type: "string"
      }
    },
    PredictionIntervalUpperBound: {
      shape: {
        type: "string"
      }
    }
  }
};
