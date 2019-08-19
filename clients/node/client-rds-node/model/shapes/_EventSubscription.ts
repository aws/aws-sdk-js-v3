import { _SourceIdsList } from "./_SourceIdsList";
import { _EventCategoriesList } from "./_EventCategoriesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventSubscription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CustomerAwsId: {
      shape: {
        type: "string"
      }
    },
    CustSubscriptionId: {
      shape: {
        type: "string"
      }
    },
    SnsTopicArn: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    SubscriptionCreationTime: {
      shape: {
        type: "string"
      }
    },
    SourceType: {
      shape: {
        type: "string"
      }
    },
    SourceIdsList: {
      shape: _SourceIdsList
    },
    EventCategoriesList: {
      shape: _EventCategoriesList
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    EventSubscriptionArn: {
      shape: {
        type: "string"
      }
    }
  }
};
