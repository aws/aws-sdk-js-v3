import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowExecutionFailedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["decisionTaskCompletedEventId"],
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
    decisionTaskCompletedEventId: {
      shape: {
        type: "integer"
      }
    }
  }
};
