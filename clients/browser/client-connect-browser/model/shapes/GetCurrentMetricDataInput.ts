import { _Filters } from "./_Filters";
import { _Groupings } from "./_Groupings";
import { _CurrentMetrics } from "./_CurrentMetrics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCurrentMetricDataInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId", "Filters", "CurrentMetrics"],
  members: {
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "InstanceId"
    },
    Filters: {
      shape: _Filters
    },
    Groupings: {
      shape: _Groupings
    },
    CurrentMetrics: {
      shape: _CurrentMetrics
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
