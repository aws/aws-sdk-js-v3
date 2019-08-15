import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateExportTaskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
