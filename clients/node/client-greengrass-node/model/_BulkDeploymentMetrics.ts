import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BulkDeploymentMetrics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InvalidInputRecords: {
      shape: {
        type: "integer"
      }
    },
    RecordsProcessed: {
      shape: {
        type: "integer"
      }
    },
    RetryAttempts: {
      shape: {
        type: "integer"
      }
    }
  }
};
