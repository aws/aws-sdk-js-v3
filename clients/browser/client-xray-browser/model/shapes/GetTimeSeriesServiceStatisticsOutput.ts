import { _TimeSeriesServiceStatisticsList } from "./_TimeSeriesServiceStatisticsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTimeSeriesServiceStatisticsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TimeSeriesServiceStatistics: {
      shape: _TimeSeriesServiceStatisticsList
    },
    ContainsOldGroupVersions: {
      shape: {
        type: "boolean"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
