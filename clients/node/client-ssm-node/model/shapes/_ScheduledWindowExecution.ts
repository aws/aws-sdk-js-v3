import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduledWindowExecution: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowId: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 3
      }
    },
    ExecutionTime: {
      shape: {
        type: "string"
      }
    }
  }
};
