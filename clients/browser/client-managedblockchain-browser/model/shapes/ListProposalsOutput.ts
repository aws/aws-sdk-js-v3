import { _ProposalSummaryList } from "./_ProposalSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProposalsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Proposals: {
      shape: _ProposalSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
