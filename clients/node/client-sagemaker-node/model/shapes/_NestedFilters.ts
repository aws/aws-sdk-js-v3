import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NestedFilters: _Structure_ = {
  type: "structure",
  required: ["NestedPropertyName", "Filters"],
  members: {
    NestedPropertyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Filters: {
      shape: _FilterList
    }
  }
};
