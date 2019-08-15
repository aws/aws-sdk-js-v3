import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MigrationTaskSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProgressUpdateStream: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MigrationTaskName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    ProgressPercent: {
      shape: {
        type: "integer"
      }
    },
    StatusDetail: {
      shape: {
        type: "string"
      }
    },
    UpdateDateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
