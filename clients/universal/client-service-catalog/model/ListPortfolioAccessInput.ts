import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPortfolioAccessInput: _Structure_ = {
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
    }
  }
};
