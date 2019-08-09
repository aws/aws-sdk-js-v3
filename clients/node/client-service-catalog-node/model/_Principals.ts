import { List as _List_ } from "@aws-sdk/types";
import { _Principal } from "./_Principal";

export const _Principals: _List_ = {
  type: "list",
  member: {
    shape: _Principal
  }
};
