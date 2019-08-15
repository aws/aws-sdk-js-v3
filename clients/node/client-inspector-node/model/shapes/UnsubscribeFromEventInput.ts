import { Structure as _Structure_ } from "@aws-sdk/types";

export const UnsubscribeFromEventInput: _Structure_ = {
  type: "structure",
  required: ["resourceArn", "event", "topicArn"],
  members: {
    resourceArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    event: {
      shape: {
        type: "string"
      }
    },
    topicArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
