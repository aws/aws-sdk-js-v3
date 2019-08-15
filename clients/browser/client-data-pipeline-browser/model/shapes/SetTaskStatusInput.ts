import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetTaskStatusInput: _Structure_ = {
  type: "structure",
  required: ["taskId", "taskStatus"],
  members: {
    taskId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    taskStatus: {
      shape: {
        type: "string"
      }
    },
    errorId: {
      shape: {
        type: "string"
      }
    },
    errorMessage: {
      shape: {
        type: "string"
      }
    },
    errorStackTrace: {
      shape: {
        type: "string"
      }
    }
  }
};
