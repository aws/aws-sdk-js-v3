import { _ProposalVoteList } from "./_ProposalVoteList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProposalVotesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProposalVotes: {
      shape: _ProposalVoteList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
