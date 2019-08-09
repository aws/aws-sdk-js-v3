import { List as _List_ } from "@aws-sdk/types";
import { _WebhookFilter } from "./_WebhookFilter";

export const _FilterGroup: _List_ = {
  type: "list",
  member: {
    shape: _WebhookFilter
  }
};
