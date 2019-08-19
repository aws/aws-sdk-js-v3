import { List as _List_ } from "@aws-sdk/types";
import { _OpsItemSummary } from "./_OpsItemSummary";

export const _OpsItemSummaries: _List_ = {
  type: "list",
  member: {
    shape: _OpsItemSummary
  }
};
