import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SamplingStatisticsDocument: _Structure_ = {
  type: "structure",
  required: [
    "RuleName",
    "ClientID",
    "Timestamp",
    "RequestCount",
    "SampledCount"
  ],
  members: {
    RuleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientID: {
      shape: {
        type: "string",
        min: 24
      }
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    RequestCount: {
      shape: {
        type: "integer"
      }
    },
    SampledCount: {
      shape: {
        type: "integer"
      }
    },
    BorrowCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
