import { List as _List_ } from "@aws-sdk/types";
import { _NamespaceFilter } from "./_NamespaceFilter";

export const _NamespaceFilters: _List_ = {
  type: "list",
  member: {
    shape: _NamespaceFilter
  }
};
