import { List as _List_ } from "@aws-sdk/types";
import { _FlowTemplateFilter } from "./_FlowTemplateFilter";

export const _FlowTemplateFilters: _List_ = {
  type: "list",
  member: {
    shape: _FlowTemplateFilter
  }
};
