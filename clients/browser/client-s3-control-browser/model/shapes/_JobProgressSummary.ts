import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobProgressSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TotalNumberOfTasks: {
      shape: {
        type: "integer"
      }
    },
    NumberOfTasksSucceeded: {
      shape: {
        type: "integer"
      }
    },
    NumberOfTasksFailed: {
      shape: {
        type: "integer"
      }
    }
  }
};
