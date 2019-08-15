import { List as _List_ } from "@aws-sdk/types";
import { _ResourceDetail } from "./_ResourceDetail";

export const _ResourceDetails: _List_ = {
  type: "list",
  member: {
    shape: _ResourceDetail
  }
};
