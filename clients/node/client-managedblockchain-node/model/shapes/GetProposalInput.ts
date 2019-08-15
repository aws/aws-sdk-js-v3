import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetProposalInput: _Structure_ = {
  type: "structure",
  required: ["NetworkId", "ProposalId"],
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
    }
  }
};
