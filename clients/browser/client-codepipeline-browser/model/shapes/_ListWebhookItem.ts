import { _WebhookDefinition } from "./_WebhookDefinition";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ListWebhookItem: _Structure_ = {
  type: "structure",
  required: ["definition", "url"],
  members: {
    definition: {
      shape: _WebhookDefinition
    },
    url: {
      shape: {
        type: "string",
        min: 1
      }
    },
    errorMessage: {
      shape: {
        type: "string"
      }
    },
    errorCode: {
      shape: {
        type: "string"
      }
    },
    lastTriggered: {
      shape: {
        type: "timestamp"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
