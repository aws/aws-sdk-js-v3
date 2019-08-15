import { _DateInterval } from "./_DateInterval";
import { _Metrics } from "./_Metrics";
import { _Groups } from "./_Groups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResultByTime: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TimePeriod: {
      shape: _DateInterval
    },
    Total: {
      shape: _Metrics
    },
    Groups: {
      shape: _Groups
    },
    Estimated: {
      shape: {
        type: "boolean"
      }
    }
  }
};
