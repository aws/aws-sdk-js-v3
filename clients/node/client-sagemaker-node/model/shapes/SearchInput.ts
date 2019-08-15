import { _SearchExpression } from "./_SearchExpression";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchInput: _Structure_ = {
  type: "structure",
  required: ["Resource"],
  members: {
    Resource: {
      shape: {
        type: "string"
      }
    },
    SearchExpression: {
      shape: _SearchExpression
    },
    SortBy: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SortOrder: {
      shape: {
        type: "string"
      }
    },
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
    }
  }
};
