import { _ListWebhookItem } from "./_ListWebhookItem";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutWebhookOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    webhook: {
      shape: _ListWebhookItem
    }
  }
};
