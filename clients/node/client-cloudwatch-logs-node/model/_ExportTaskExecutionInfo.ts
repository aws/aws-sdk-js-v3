import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExportTaskExecutionInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    creationTime: {
      shape: {
        type: "integer"
      }
    },
    completionTime: {
      shape: {
        type: "integer"
      }
    }
  }
};
