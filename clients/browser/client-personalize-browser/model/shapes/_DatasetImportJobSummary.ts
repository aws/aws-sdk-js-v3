import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DatasetImportJobSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    datasetImportJobArn: {
      shape: {
        type: "string"
      }
    },
    jobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    creationDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    failureReason: {
      shape: {
        type: "string"
      }
    }
  }
};
