import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSubscriptionStateOutput: _Structure_ = {
  type: "structure",
  required: ["SubscriptionState"],
  members: {
    SubscriptionState: {
      shape: {
        type: "string"
      }
    }
  }
};
