import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateConstraintInput: _Structure_ = {
  type: "structure",
  required: [
    "PortfolioId",
    "ProductId",
    "Parameters",
    "Type",
    "IdempotencyToken"
  ],
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
    Parameters: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    IdempotencyToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
