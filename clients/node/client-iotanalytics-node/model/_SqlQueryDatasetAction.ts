import { _QueryFilters } from "./_QueryFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SqlQueryDatasetAction: _Structure_ = {
  type: "structure",
  required: ["sqlQuery"],
  members: {
    sqlQuery: {
      shape: {
        type: "string"
      }
    },
    filters: {
      shape: _QueryFilters
    }
  }
};
