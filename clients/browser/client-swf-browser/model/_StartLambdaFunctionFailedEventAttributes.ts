import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StartLambdaFunctionFailedEventAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    scheduledEventId: {
      shape: {
        type: "integer"
      }
    },
    cause: {
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
