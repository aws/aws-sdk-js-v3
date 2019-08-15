import { List as _List_ } from "@aws-sdk/types";
import { _ProposalSummary } from "./_ProposalSummary";

export const _ProposalSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _ProposalSummary
  }
};
