import { List as _List_ } from "@aws-sdk/types";
import { _EventBus } from "./_EventBus";

export const _EventBusList: _List_ = {
  type: "list",
  member: {
    shape: _EventBus
  }
};
