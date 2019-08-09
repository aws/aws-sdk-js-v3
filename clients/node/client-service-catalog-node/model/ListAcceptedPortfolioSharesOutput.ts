import { _PortfolioDetails } from "./_PortfolioDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAcceptedPortfolioSharesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PortfolioDetails: {
      shape: _PortfolioDetails
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
