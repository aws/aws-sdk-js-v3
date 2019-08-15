import { List as _List_ } from "@aws-sdk/types";
import { _Trigger } from "./_Trigger";

export const _TriggerList: _List_ = {
  type: "list",
  member: {
    shape: _Trigger
  }
};
