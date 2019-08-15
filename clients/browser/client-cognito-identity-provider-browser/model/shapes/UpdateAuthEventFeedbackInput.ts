import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAuthEventFeedbackInput: _Structure_ = {
  type: "structure",
  required: [
    "UserPoolId",
    "Username",
    "EventId",
    "FeedbackToken",
    "FeedbackValue"
  ],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Username: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    EventId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FeedbackToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    FeedbackValue: {
      shape: {
        type: "string"
      }
    }
  }
};
