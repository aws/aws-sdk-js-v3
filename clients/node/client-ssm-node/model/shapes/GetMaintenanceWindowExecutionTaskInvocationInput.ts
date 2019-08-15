import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMaintenanceWindowExecutionTaskInvocationInput: _Structure_ = {
  type: "structure",
  required: ["WindowExecutionId", "TaskId", "InvocationId"],
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
    },
    InvocationId: {
      shape: {
        type: "string",
        min: 36
      }
    }
  }
};
