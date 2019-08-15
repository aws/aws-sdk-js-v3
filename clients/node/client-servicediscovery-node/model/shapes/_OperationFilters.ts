import { List as _List_ } from "@aws-sdk/types";
import { _OperationFilter } from "./_OperationFilter";

export const _OperationFilters: _List_ = {
  type: "list",
  member: {
    shape: _OperationFilter
  }
};
