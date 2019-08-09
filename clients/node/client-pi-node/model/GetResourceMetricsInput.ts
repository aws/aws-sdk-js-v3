import { _MetricQueryList } from "./_MetricQueryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourceMetricsInput: _Structure_ = {
  type: "structure",
  required: [
    "ServiceType",
    "Identifier",
    "MetricQueries",
    "StartTime",
    "EndTime"
  ],
  members: {
    ServiceType: {
      shape: {
        type: "string"
      }
    },
    Identifier: {
      shape: {
        type: "string"
      }
    },
    MetricQueries: {
      shape: _MetricQueryList
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
    PeriodInSeconds: {
      shape: {
        type: "integer"
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
