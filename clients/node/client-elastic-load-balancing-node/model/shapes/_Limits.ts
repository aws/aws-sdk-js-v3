import { List as _List_ } from "@aws-sdk/types";
import { _Limit } from "./_Limit";

export const _Limits: _List_ = {
  type: "list",
  member: {
    shape: _Limit
  }
};
