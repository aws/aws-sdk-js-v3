import { _ListTagOptionsFilters } from "./_ListTagOptionsFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagOptionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _ListTagOptionsFilters
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
