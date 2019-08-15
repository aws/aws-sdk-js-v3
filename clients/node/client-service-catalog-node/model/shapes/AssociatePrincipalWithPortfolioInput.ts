import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociatePrincipalWithPortfolioInput: _Structure_ = {
  type: "structure",
  required: ["PortfolioId", "PrincipalARN", "PrincipalType"],
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
    },
    PrincipalType: {
      shape: {
        type: "string"
      }
    }
  }
};
