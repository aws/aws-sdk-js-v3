import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociatePrincipalFromPortfolioInput: _Structure_ = {
  type: "structure",
  required: ["PortfolioId", "PrincipalARN"],
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
    PrincipalARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
