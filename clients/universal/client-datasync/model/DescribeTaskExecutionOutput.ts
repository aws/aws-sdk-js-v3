import { _Options } from "./_Options";
import { _FilterList } from "./_FilterList";
import { _TaskExecutionResultDetail } from "./_TaskExecutionResultDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTaskExecutionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TaskExecutionArn: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Options: {
      shape: _Options
    },
    Excludes: {
      shape: _FilterList
    },
    Includes: {
      shape: _FilterList
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EstimatedFilesToTransfer: {
      shape: {
        type: "integer"
      }
    },
    EstimatedBytesToTransfer: {
      shape: {
        type: "integer"
      }
    },
    FilesTransferred: {
      shape: {
        type: "integer"
      }
    },
    BytesWritten: {
      shape: {
        type: "integer"
      }
    },
    BytesTransferred: {
      shape: {
        type: "integer"
      }
    },
    Result: {
      shape: _TaskExecutionResultDetail
    }
  }
};
