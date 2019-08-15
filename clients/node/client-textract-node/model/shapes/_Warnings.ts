import { List as _List_ } from "@aws-sdk/types";
import { _Warning } from "./_Warning";

export const _Warnings: _List_ = {
  type: "list",
  member: {
    shape: _Warning
  }
};
