import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeExportTasksInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    statusCode: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    limit: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
