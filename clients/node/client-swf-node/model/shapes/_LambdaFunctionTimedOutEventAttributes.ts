import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaFunctionTimedOutEventAttributes: _Structure_ = {
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
    timeoutType: {
      shape: {
        type: "string"
      }
    }
  }
};
