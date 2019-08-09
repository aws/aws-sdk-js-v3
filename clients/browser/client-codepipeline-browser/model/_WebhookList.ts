import { List as _List_ } from "@aws-sdk/types";
import { _ListWebhookItem } from "./_ListWebhookItem";

export const _WebhookList: _List_ = {
  type: "list",
  member: {
    shape: _ListWebhookItem
  }
};
