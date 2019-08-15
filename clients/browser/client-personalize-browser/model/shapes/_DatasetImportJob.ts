import { _DataSource } from "./_DataSource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DatasetImportJob: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    datasetImportJobArn: {
      shape: {
        type: "string"
      }
    },
    datasetArn: {
      shape: {
        type: "string"
      }
    },
    dataSource: {
      shape: _DataSource
    },
    roleArn: {
      shape: {
        type: "string"
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
