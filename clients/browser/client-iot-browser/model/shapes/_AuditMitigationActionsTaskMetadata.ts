import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuditMitigationActionsTaskMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    taskStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
