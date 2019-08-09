import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaFunctionCompletedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["scheduledEventId", "startedEventId"],
  members: {
    scheduledEventId: {
      shape: {
        type: "integer"
      }
    },
    startedEventId: {
      shape: {
        type: "integer"
      }
    },
    result: {
      shape: {
        type: "string"
      }
    }
  }
};
