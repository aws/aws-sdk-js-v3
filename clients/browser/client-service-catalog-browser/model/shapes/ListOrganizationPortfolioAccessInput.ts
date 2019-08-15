import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOrganizationPortfolioAccessInput: _Structure_ = {
  type: "structure",
  required: ["PortfolioId", "OrganizationNodeType"],
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
    OrganizationNodeType: {
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
    }
  }
};
