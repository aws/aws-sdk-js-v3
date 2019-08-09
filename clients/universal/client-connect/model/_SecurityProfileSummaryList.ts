import { List as _List_ } from "@aws-sdk/types";
import { _SecurityProfileSummary } from "./_SecurityProfileSummary";

export const _SecurityProfileSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _SecurityProfileSummary
  }
};
