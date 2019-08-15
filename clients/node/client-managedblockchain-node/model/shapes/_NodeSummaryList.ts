import { List as _List_ } from "@aws-sdk/types";
import { _NodeSummary } from "./_NodeSummary";

export const _NodeSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _NodeSummary
  }
};
