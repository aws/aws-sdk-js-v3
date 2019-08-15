import { Structure as _Structure_ } from "@aws-sdk/types";

export const VoteOnProposalInput: _Structure_ = {
  type: "structure",
  required: ["NetworkId", "ProposalId", "VoterMemberId", "Vote"],
  members: {
    NetworkId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "networkId"
    },
    ProposalId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "proposalId"
    },
    VoterMemberId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Vote: {
      shape: {
        type: "string"
      }
    }
  }
};
