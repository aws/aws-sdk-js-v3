import { List as _List_ } from "@aws-sdk/types";
import { _ErrorDetail } from "./_ErrorDetail";

export const _ErrorDetails: _List_ = {
  type: "list",
  member: {
    shape: _ErrorDetail
  }
};
