import { _OrganizationNode } from "./_OrganizationNode";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePortfolioShareInput: _Structure_ = {
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
    AccountId: {
      shape: {
        type: "string"
      }
    },
    OrganizationNode: {
      shape: _OrganizationNode
    }
  }
};
