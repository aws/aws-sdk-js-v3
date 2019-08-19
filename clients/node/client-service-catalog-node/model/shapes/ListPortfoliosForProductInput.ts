import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPortfoliosForProductInput: _Structure_ = {
  type: "structure",
  required: ["ProductId"],
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
    PageToken: {
      shape: {
        type: "string"
      }
    },
    PageSize: {
      shape: {
        type: "integer"
      }
    }
  }
};
