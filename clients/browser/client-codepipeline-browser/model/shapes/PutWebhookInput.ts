import { _WebhookDefinition } from "./_WebhookDefinition";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutWebhookInput: _Structure_ = {
  type: "structure",
  required: ["webhook"],
  members: {
    webhook: {
      shape: _WebhookDefinition
    },
    tags: {
      shape: _TagList
    }
  }
};
