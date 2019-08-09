import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SamplingStatisticSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RuleName: {
      shape: {
        type: "string"
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
    BorrowCount: {
      shape: {
        type: "integer"
      }
    },
    SampledCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
