import { _ExportTaskList } from "./_ExportTaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeExportTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ExportTasks: {
      shape: _ExportTaskList,
      locationName: "exportTaskSet"
    }
  }
};
