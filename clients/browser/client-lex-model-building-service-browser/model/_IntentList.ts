import { List as _List_ } from "@aws-sdk/types";
import { _Intent } from "./_Intent";

export const _IntentList: _List_ = {
  type: "list",
  member: {
    shape: _Intent
  }
};
