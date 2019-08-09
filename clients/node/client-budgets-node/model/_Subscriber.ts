import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Subscriber: _Structure_ = {
  type: "structure",
  required: ["SubscriptionType", "Address"],
  members: {
    SubscriptionType: {
      shape: {
        type: "string"
      }
    },
    Address: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    }
  }
};
