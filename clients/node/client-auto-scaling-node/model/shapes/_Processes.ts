import { List as _List_ } from "@aws-sdk/types";
import { _ProcessType } from "./_ProcessType";

export const _Processes: _List_ = {
  type: "list",
  member: {
    shape: _ProcessType
  }
};
