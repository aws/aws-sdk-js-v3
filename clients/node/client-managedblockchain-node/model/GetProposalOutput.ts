import { _Proposal } from "./_Proposal";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetProposalOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Proposal: {
      shape: _Proposal
    }
  }
};
