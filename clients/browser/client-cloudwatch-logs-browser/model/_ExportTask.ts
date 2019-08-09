import { _ExportTaskStatus } from "./_ExportTaskStatus";
import { _ExportTaskExecutionInfo } from "./_ExportTaskExecutionInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExportTask: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    taskName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    from: {
      shape: {
        type: "integer"
      }
    },
    to: {
      shape: {
        type: "integer"
      }
    },
    destination: {
      shape: {
        type: "string",
        min: 1
      }
    },
    destinationPrefix: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: _ExportTaskStatus
    },
    executionInfo: {
      shape: _ExportTaskExecutionInfo
    }
  }
};
