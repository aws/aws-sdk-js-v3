import { _EventCategoriesList } from "./_EventCategoriesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyEventSubscriptionInput: _Structure_ = {
  type: "structure",
  required: ["SubscriptionName"],
  members: {
    SubscriptionName: {
      shape: {
        type: "string"
      }
    },
    SnsTopicArn: {
      shape: {
        type: "string"
      }
    },
    SourceType: {
      shape: {
        type: "string"
      }
    },
    EventCategories: {
      shape: _EventCategoriesList
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
