import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuditMitigationActionExecutionMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    findingId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    actionName: {
      shape: {
        type: "string"
      }
    },
    actionId: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    endTime: {
      shape: {
        type: "timestamp"
      }
    },
    errorCode: {
      shape: {
        type: "string"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    }
  }
};
