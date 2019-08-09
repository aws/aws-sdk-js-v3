import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaFunctionScheduledEventAttributes: _Structure_ = {
  type: "structure",
  required: ["id", "name", "decisionTaskCompletedEventId"],
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
    control: {
      shape: {
        type: "string"
      }
    },
    input: {
      shape: {
        type: "string"
      }
    },
    startToCloseTimeout: {
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
