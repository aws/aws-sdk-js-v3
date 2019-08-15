import { _SourceIdsList } from "./_SourceIdsList";
import { _EventCategoriesList } from "./_EventCategoriesList";
import { _TagList } from "./_TagList";
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
        type: "timestamp"
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
    Severity: {
      shape: {
        type: "string"
      }
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
