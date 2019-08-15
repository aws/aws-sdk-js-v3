import { Structure as _Structure_ } from "@aws-sdk/types";

export const UnsubscribeInput: _Structure_ = {
  type: "structure",
  required: ["SubscriptionArn"],
  members: {
    SubscriptionArn: {
      shape: {
        type: "string"
      }
    }
  }
};
