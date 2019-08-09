import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelExportTaskInput: _Structure_ = {
  type: "structure",
  required: ["ExportTaskId"],
  members: {
    ExportTaskId: {
      shape: {
        type: "string"
      },
      locationName: "exportTaskId"
    }
  }
};
