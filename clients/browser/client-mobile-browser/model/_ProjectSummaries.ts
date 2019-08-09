import { List as _List_ } from "@aws-sdk/types";
import { _ProjectSummary } from "./_ProjectSummary";

export const _ProjectSummaries: _List_ = {
  type: "list",
  member: {
    shape: _ProjectSummary
  }
};
