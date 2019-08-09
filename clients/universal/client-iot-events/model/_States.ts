import { List as _List_ } from "@aws-sdk/types";
import { _State } from "./_State";

export const _States: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _State
  }
};
