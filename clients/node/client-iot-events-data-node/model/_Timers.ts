import { List as _List_ } from "@aws-sdk/types";
import { _Timer } from "./_Timer";

export const _Timers: _List_ = {
  type: "list",
  member: {
    shape: _Timer
  }
};
