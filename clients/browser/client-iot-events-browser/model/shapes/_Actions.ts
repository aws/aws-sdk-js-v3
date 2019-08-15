import { List as _List_ } from "@aws-sdk/types";
import { _Action } from "./_Action";

export const _Actions: _List_ = {
  type: "list",
  member: {
    shape: _Action
  }
};
