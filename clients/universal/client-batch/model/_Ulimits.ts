import { List as _List_ } from "@aws-sdk/types";
import { _Ulimit } from "./_Ulimit";

export const _Ulimits: _List_ = {
  type: "list",
  member: {
    shape: _Ulimit
  }
};
