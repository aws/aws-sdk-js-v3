import { _WebhookList } from "./_WebhookList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListWebhooksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    webhooks: {
      shape: _WebhookList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
