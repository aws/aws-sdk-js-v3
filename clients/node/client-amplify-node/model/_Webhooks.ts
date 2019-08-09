import { List as _List_ } from "@aws-sdk/types";
import { _Webhook } from "./_Webhook";

export const _Webhooks: _List_ = {
  type: "list",
  member: {
    shape: _Webhook
  }
};
