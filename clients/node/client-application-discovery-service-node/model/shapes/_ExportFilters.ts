import { List as _List_ } from "@aws-sdk/types";
import { _ExportFilter } from "./_ExportFilter";

export const _ExportFilters: _List_ = {
  type: "list",
  member: {
    shape: _ExportFilter
  }
};
