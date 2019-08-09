import { Structure as _Structure_ } from "@aws-sdk/types";

export const RejectPortfolioShareInput: _Structure_ = {
  type: "structure",
  required: ["PortfolioId"],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    PortfolioId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PortfolioShareType: {
      shape: {
        type: "string"
      }
    }
  }
};
