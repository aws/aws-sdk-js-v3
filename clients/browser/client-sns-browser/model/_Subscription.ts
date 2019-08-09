import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Subscription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SubscriptionArn: {
      shape: {
        type: "string"
      }
    },
    Owner: {
      shape: {
        type: "string"
      }
    },
    Protocol: {
      shape: {
        type: "string"
      }
    },
    Endpoint: {
      shape: {
        type: "string"
      }
    },
    TopicArn: {
      shape: {
        type: "string"
      }
    }
  }
};
