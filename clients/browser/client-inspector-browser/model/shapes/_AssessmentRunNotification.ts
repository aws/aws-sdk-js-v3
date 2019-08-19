import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssessmentRunNotification: _Structure_ = {
  type: "structure",
  required: ["date", "event", "error"],
  members: {
    date: {
      shape: {
        type: "timestamp"
      }
    },
    event: {
      shape: {
        type: "string"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    },
    error: {
      shape: {
        type: "boolean"
      }
    },
    snsTopicArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    snsPublishStatusCode: {
      shape: {
        type: "string"
      }
    }
  }
};
