import { _ProductViewFilters } from "./_ProductViewFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchProductsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _ProductViewFilters
    },
    PageSize: {
      shape: {
        type: "integer"
      }
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
    }
  }
};
