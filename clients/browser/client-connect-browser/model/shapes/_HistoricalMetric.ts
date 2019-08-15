import { _Threshold } from "./_Threshold";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HistoricalMetric: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Threshold: {
      shape: _Threshold
    },
    Statistic: {
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
