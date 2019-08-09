import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConfirmSubscriptionInput: _Structure_ = {
  type: "structure",
  required: ["TopicArn", "Token"],
  members: {
    TopicArn: {
      shape: {
        type: "string"
      }
    },
    Token: {
      shape: {
        type: "string"
      }
    },
    AuthenticateOnUnsubscribe: {
      shape: {
        type: "string"
      }
    }
  }
};
