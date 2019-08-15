import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetSubscriptionAttributesInput: _Structure_ = {
  type: "structure",
  required: ["SubscriptionArn", "AttributeName"],
  members: {
    SubscriptionArn: {
      shape: {
        type: "string"
      }
    },
    AttributeName: {
      shape: {
        type: "string"
      }
    },
    AttributeValue: {
      shape: {
        type: "string"
      }
    }
  }
};
