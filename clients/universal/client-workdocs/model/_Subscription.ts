import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Subscription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SubscriptionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EndPoint: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Protocol: {
      shape: {
        type: "string"
      }
    }
  }
};
