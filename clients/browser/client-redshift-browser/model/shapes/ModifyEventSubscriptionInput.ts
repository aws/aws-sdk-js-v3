import { _SourceIdsList } from "./_SourceIdsList";
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
    SourceIds: {
      shape: _SourceIdsList
    },
    EventCategories: {
      shape: _EventCategoriesList
    },
    Severity: {
      shape: {
        type: "string"
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
