import { _AnomalyDetectorExcludedTimeRanges } from "./_AnomalyDetectorExcludedTimeRanges";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AnomalyDetectorConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ExcludedTimeRanges: {
      shape: _AnomalyDetectorExcludedTimeRanges
    },
    MetricTimezone: {
      shape: {
        type: "string"
      }
    }
  }
};
