import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QueryExecutionStatistics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EngineExecutionTimeInMillis: {
      shape: {
        type: "integer"
      }
    },
    DataScannedInBytes: {
      shape: {
        type: "integer"
      }
    }
  }
};
