import { _ExportTask } from "./_ExportTask";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInstanceExportTaskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ExportTask: {
      shape: _ExportTask,
      locationName: "exportTask"
    }
  }
};
