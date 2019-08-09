import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePortfolioShareStatusInput: _Structure_ = {
  type: "structure",
  required: ["PortfolioShareToken"],
  members: {
    PortfolioShareToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
