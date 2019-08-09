import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeletePortfolioShareOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PortfolioShareToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
