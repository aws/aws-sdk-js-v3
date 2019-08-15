import { _ProductViewFilters } from "./_ProductViewFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchProductsAsAdminInput: _Structure_ = {
  type: "structure",
  required: [],
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
    Filters: {
      shape: _ProductViewFilters
    },
    SortBy: {
      shape: {
        type: "string"
      }
    },
    SortOrder: {
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
    ProductSource: {
      shape: {
        type: "string"
      }
    }
  }
};
