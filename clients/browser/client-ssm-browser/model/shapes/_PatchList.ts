import { List as _List_ } from "@aws-sdk/types";
import { _Patch } from "./_Patch";

export const _PatchList: _List_ = {
  type: "list",
  member: {
    shape: _Patch
  }
};
