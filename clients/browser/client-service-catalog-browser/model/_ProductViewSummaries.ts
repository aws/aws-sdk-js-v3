import { List as _List_ } from "@aws-sdk/types";
import { _ProductViewSummary } from "./_ProductViewSummary";

export const _ProductViewSummaries: _List_ = {
  type: "list",
  member: {
    shape: _ProductViewSummary
  }
};
