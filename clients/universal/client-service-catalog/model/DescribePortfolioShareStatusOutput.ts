import { _ShareDetails } from "./_ShareDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePortfolioShareStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PortfolioShareToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PortfolioId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OrganizationNodeValue: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    ShareDetails: {
      shape: _ShareDetails
    }
  }
};
