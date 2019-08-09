import { _EntityTypes } from "./_EntityTypes";
import { _EntityFilters } from "./_EntityFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchEntitiesInput: _Structure_ = {
  type: "structure",
  required: ["entityTypes"],
  members: {
    entityTypes: {
      shape: _EntityTypes
    },
    filters: {
      shape: _EntityFilters
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    namespaceVersion: {
      shape: {
        type: "integer"
      }
    }
  }
};
