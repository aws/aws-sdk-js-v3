import { _FilterList } from "./_FilterList";
import { _NestedFiltersList } from "./_NestedFiltersList";
import { _SearchExpressionList } from "./_SearchExpressionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SearchExpression: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList
    },
    NestedFilters: {
      shape: _NestedFiltersList
    },
    SubExpressions: {
      shape: _SearchExpressionList
    },
    Operator: {
      shape: {
        type: "string"
      }
    }
  }
};
