import { List as _List_ } from "@aws-sdk/types";
import { _ChangeSetSummary } from "./_ChangeSetSummary";

export const _ChangeSetSummaries: _List_ = {
  type: "list",
  member: {
    shape: _ChangeSetSummary
  }
};
