import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuditTaskMetadata: _Structure_ = {
  type: "structure",
  required: [],
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
    taskType: {
      shape: {
        type: "string"
      }
    }
  }
};
