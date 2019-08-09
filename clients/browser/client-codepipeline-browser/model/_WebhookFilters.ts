import { List as _List_ } from "@aws-sdk/types";
import { _WebhookFilterRule } from "./_WebhookFilterRule";

export const _WebhookFilters: _List_ = {
  type: "list",
  member: {
    shape: _WebhookFilterRule
  }
};
