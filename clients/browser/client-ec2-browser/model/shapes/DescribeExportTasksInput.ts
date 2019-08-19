import { _ExportTaskIdStringList } from "./_ExportTaskIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeExportTasksInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ExportTaskIds: {
      shape: _ExportTaskIdStringList,
      locationName: "exportTaskId"
    }
  }
};
