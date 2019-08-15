import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateProductFromPortfolioInput: _Structure_ = {
  type: "structure",
  required: ["ProductId", "PortfolioId"],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    ProductId: {
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
    }
  }
};
