import { List as _List_ } from "@aws-sdk/types";
import { _VoteSummary } from "./_VoteSummary";

export const _ProposalVoteList: _List_ = {
  type: "list",
  member: {
    shape: _VoteSummary
  }
};
