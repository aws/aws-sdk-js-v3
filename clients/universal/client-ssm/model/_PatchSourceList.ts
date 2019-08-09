import { List as _List_ } from "@aws-sdk/types";
import { _PatchSource } from "./_PatchSource";

export const _PatchSourceList: _List_ = {
  type: "list",
  member: {
    shape: _PatchSource
  }
};
