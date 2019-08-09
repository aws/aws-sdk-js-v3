import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowExecutionCompletedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["decisionTaskCompletedEventId"],
  members: {
    result: {
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
