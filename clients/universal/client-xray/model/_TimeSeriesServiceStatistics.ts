import { _EdgeStatistics } from "./_EdgeStatistics";
import { _ServiceStatistics } from "./_ServiceStatistics";
import { _Histogram } from "./_Histogram";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimeSeriesServiceStatistics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    EdgeSummaryStatistics: {
      shape: _EdgeStatistics
    },
    ServiceSummaryStatistics: {
      shape: _ServiceStatistics
    },
    ResponseTimeHistogram: {
      shape: _Histogram
    }
  }
};
