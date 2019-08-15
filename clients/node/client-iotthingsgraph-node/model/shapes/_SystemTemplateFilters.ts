import { List as _List_ } from "@aws-sdk/types";
import { _SystemTemplateFilter } from "./_SystemTemplateFilter";

export const _SystemTemplateFilters: _List_ = {
  type: "list",
  member: {
    shape: _SystemTemplateFilter
  }
};
