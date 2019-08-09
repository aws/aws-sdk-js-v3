import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSubscriptionsByTopicInput: _Structure_ = {
  type: "structure",
  required: ["TopicArn"],
  members: {
    TopicArn: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
