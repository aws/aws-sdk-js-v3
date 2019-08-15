import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LogGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    creationTime: {
      shape: {
        type: "integer"
      }
    },
    retentionInDays: {
      shape: {
        type: "integer"
      }
    },
    metricFilterCount: {
      shape: {
        type: "integer"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    storedBytes: {
      shape: {
        type: "integer"
      }
    },
    kmsKeyId: {
      shape: {
        type: "string"
      }
    }
  }
};
