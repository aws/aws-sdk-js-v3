import { List as _List_ } from "@aws-sdk/types";
import { _Lag } from "./_Lag";

export const _LagList: _List_ = {
  type: "list",
  member: {
    shape: _Lag
  }
};
