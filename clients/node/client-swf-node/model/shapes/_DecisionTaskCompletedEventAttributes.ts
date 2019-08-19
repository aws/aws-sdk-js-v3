import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DecisionTaskCompletedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["scheduledEventId", "startedEventId"],
  members: {
    executionContext: {
      shape: {
        type: "string"
      }
    },
    scheduledEventId: {
      shape: {
        type: "integer"
      }
    },
    startedEventId: {
      shape: {
        type: "integer"
      }
    }
  }
};
