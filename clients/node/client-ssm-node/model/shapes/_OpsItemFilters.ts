import { List as _List_ } from "@aws-sdk/types";
import { _OpsItemFilter } from "./_OpsItemFilter";

export const _OpsItemFilters: _List_ = {
  type: "list",
  member: {
    shape: _OpsItemFilter
  }
};
