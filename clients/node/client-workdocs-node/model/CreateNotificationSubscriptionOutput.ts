import { _Subscription } from "./_Subscription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNotificationSubscriptionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Subscription: {
      shape: _Subscription
    }
  }
};
