import { _DateInterval } from "./_DateInterval";
import { _GroupDefinitions } from "./_GroupDefinitions";
import { _Expression } from "./_Expression";
import { _MetricNames } from "./_MetricNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetReservationCoverageInput: _Structure_ = {
  type: "structure",
  required: ["TimePeriod"],
  members: {
    TimePeriod: {
      shape: _DateInterval
    },
    GroupBy: {
      shape: _GroupDefinitions
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
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
