import { List as _List_ } from "@aws-sdk/types";
import { _ResourceSpecificResult } from "./_ResourceSpecificResult";

export const _ResourceSpecificResultListType: _List_ = {
  type: "list",
  member: {
    shape: _ResourceSpecificResult
  }
};
