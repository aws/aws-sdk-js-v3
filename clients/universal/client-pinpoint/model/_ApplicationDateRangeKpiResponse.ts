import { _BaseKpiResult } from "./_BaseKpiResult";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationDateRangeKpiResponse: _Structure_ = {
  type: "structure",
  required: ["KpiResult", "KpiName", "EndTime", "StartTime", "ApplicationId"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    },
    KpiName: {
      shape: {
        type: "string"
      }
    },
    KpiResult: {
      shape: _BaseKpiResult
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    }
  }
};
