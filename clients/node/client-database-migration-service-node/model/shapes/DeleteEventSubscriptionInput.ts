import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteEventSubscriptionInput: _Structure_ = {
  type: "structure",
  required: ["SubscriptionName"],
  members: {
    SubscriptionName: {
      shape: {
        type: "string"
      }
    }
  }
};
