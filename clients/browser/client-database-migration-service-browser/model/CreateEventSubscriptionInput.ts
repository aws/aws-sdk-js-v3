import { _EventCategoriesList } from "./_EventCategoriesList";
import { _SourceIdsList } from "./_SourceIdsList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateEventSubscriptionInput: _Structure_ = {
  type: "structure",
  required: ["SubscriptionName", "SnsTopicArn"],
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
    SourceIds: {
      shape: _SourceIdsList
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
