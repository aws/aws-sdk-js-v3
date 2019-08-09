import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduleLambdaFunctionFailedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["id", "name", "cause", "decisionTaskCompletedEventId"],
  members: {
    id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    cause: {
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
