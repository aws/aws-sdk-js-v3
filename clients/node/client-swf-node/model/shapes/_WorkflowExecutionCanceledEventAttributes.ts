import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowExecutionCanceledEventAttributes: _Structure_ = {
  type: "structure",
  required: ["decisionTaskCompletedEventId"],
  members: {
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
