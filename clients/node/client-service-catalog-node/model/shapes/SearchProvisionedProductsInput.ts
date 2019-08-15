import { _AccessLevelFilter } from "./_AccessLevelFilter";
import { _ProvisionedProductFilters } from "./_ProvisionedProductFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchProvisionedProductsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    AccessLevelFilter: {
      shape: _AccessLevelFilter
    },
    Filters: {
      shape: _ProvisionedProductFilters
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
