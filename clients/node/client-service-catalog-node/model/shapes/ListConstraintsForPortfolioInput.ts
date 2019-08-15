import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListConstraintsForPortfolioInput: _Structure_ = {
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
    ProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PageSize: {
      shape: {
        type: "integer"
      }
    },
    PageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
