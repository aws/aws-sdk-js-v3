import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMaintenanceWindowExecutionTaskInput: _Structure_ = {
  type: "structure",
  required: ["WindowExecutionId", "TaskId"],
  members: {
    WindowExecutionId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    TaskId: {
      shape: {
        type: "string",
        min: 36
      }
    }
  }
};
