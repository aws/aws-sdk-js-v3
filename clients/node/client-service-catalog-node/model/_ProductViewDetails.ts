import { List as _List_ } from "@aws-sdk/types";
import { _ProductViewDetail } from "./_ProductViewDetail";

export const _ProductViewDetails: _List_ = {
  type: "list",
  member: {
    shape: _ProductViewDetail
  }
};
