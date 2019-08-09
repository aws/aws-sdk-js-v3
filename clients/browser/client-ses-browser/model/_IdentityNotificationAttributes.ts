import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IdentityNotificationAttributes: _Structure_ = {
  type: "structure",
  required: [
    "BounceTopic",
    "ComplaintTopic",
    "DeliveryTopic",
    "ForwardingEnabled"
  ],
  members: {
    BounceTopic: {
      shape: {
        type: "string"
      }
    },
    ComplaintTopic: {
      shape: {
        type: "string"
      }
    },
    DeliveryTopic: {
      shape: {
        type: "string"
      }
    },
    ForwardingEnabled: {
      shape: {
        type: "boolean"
      }
    },
    HeadersInBounceNotificationsEnabled: {
      shape: {
        type: "boolean"
      }
    },
    HeadersInComplaintNotificationsEnabled: {
      shape: {
        type: "boolean"
      }
    },
    HeadersInDeliveryNotificationsEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
