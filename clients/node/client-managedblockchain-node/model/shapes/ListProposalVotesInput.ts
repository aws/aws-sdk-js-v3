import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProposalVotesInput: _Structure_ = {
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
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    }
  }
};
