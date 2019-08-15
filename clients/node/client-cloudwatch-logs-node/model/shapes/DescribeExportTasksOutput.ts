import { _ExportTasks } from "./_ExportTasks";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeExportTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    exportTasks: {
      shape: _ExportTasks
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
