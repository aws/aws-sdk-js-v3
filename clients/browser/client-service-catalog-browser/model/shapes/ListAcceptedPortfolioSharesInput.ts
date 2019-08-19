import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAcceptedPortfolioSharesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
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
    },
    PortfolioShareType: {
      shape: {
        type: "string"
      }
    }
  }
};
