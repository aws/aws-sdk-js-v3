import { List as _List_ } from "@aws-sdk/types";
import { _ModelSummary } from "./_ModelSummary";

export const _ModelSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _ModelSummary
  }
};
