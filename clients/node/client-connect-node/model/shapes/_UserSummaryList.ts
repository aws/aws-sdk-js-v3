import { List as _List_ } from "@aws-sdk/types";
import { _UserSummary } from "./_UserSummary";

export const _UserSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _UserSummary
  }
};
