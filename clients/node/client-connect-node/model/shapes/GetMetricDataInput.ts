import { _Filters } from "./_Filters";
import { _Groupings } from "./_Groupings";
import { _HistoricalMetrics } from "./_HistoricalMetrics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMetricDataInput: _Structure_ = {
  type: "structure",
  required: [
    "InstanceId",
    "StartTime",
    "EndTime",
    "Filters",
    "HistoricalMetrics"
  ],
  members: {
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "InstanceId"
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    Filters: {
      shape: _Filters
    },
    Groupings: {
      shape: _Groupings
    },
    HistoricalMetrics: {
      shape: _HistoricalMetrics
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
