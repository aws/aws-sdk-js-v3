import { List as _List_ } from "@aws-sdk/types";
import { _TagOptionDetail } from "./_TagOptionDetail";

export const _TagOptionDetails: _List_ = {
  type: "list",
  member: {
    shape: _TagOptionDetail
  }
};
