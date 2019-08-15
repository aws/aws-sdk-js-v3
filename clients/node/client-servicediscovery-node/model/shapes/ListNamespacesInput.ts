import { _NamespaceFilters } from "./_NamespaceFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListNamespacesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Filters: {
      shape: _NamespaceFilters
    }
  }
};
