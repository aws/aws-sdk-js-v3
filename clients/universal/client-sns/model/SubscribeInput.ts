import { _SubscriptionAttributesMap } from "./_SubscriptionAttributesMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SubscribeInput: _Structure_ = {
  type: "structure",
  required: ["TopicArn", "Protocol"],
  members: {
    TopicArn: {
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
    Attributes: {
      shape: _SubscriptionAttributesMap
    },
    ReturnSubscriptionArn: {
      shape: {
        type: "boolean"
      }
    }
  }
};
