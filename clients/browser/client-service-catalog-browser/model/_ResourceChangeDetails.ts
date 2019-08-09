import { List as _List_ } from "@aws-sdk/types";
import { _ResourceChangeDetail } from "./_ResourceChangeDetail";

export const _ResourceChangeDetails: _List_ = {
  type: "list",
  member: {
    shape: _ResourceChangeDetail
  }
};
