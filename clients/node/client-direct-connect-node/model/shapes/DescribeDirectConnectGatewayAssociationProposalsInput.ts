import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDirectConnectGatewayAssociationProposalsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    directConnectGatewayId: {
      shape: {
        type: "string"
      }
    },
    proposalId: {
      shape: {
        type: "string"
      }
    },
    associatedGatewayId: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
