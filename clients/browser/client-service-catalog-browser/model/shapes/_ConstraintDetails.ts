import { List as _List_ } from "@aws-sdk/types";
import { _ConstraintDetail } from "./_ConstraintDetail";

export const _ConstraintDetails: _List_ = {
  type: "list",
  member: {
    shape: _ConstraintDetail
  }
};
