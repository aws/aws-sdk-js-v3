import { List as _List_ } from "@aws-sdk/types";
import { _CodeRepositorySummary } from "./_CodeRepositorySummary";

export const _CodeRepositorySummaryList: _List_ = {
  type: "list",
  member: {
    shape: _CodeRepositorySummary
  }
};
