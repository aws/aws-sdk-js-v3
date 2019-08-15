import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaFunctionFailedEventAttributes: _Structure_ = {
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
    reason: {
      shape: {
        type: "string"
      }
    },
    details: {
      shape: {
        type: "string"
      }
    }
  }
};
