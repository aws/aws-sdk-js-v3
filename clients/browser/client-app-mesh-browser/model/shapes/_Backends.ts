import { List as _List_ } from "@aws-sdk/types";
import { _Backend } from "./_Backend";

export const _Backends: _List_ = {
  type: "list",
  member: {
    shape: _Backend
  }
};
