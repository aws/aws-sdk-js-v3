import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowExecutionTerminatedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["childPolicy"],
  members: {
    reason: {
      shape: {
        type: "string"
      }
    },
    details: {
      shape: {
        type: "string"
      }
    },
    childPolicy: {
      shape: {
        type: "string"
      }
    },
    cause: {
      shape: {
        type: "string"
      }
    }
  }
};
