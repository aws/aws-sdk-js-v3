import { _DateInterval } from "./_DateInterval";
import { _Expression } from "./_Expression";
import { _MetricNames } from "./_MetricNames";
import { _GroupDefinitions } from "./_GroupDefinitions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCostAndUsageInput: _Structure_ = {
  type: "structure",
  required: ["TimePeriod"],
  members: {
    TimePeriod: {
      shape: _DateInterval
    },
    Granularity: {
      shape: {
        type: "string"
      }
    },
    Filter: {
      shape: _Expression
    },
    Metrics: {
      shape: _MetricNames
    },
    GroupBy: {
      shape: _GroupDefinitions
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
