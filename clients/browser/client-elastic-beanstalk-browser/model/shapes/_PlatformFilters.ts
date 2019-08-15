import { List as _List_ } from "@aws-sdk/types";
import { _PlatformFilter } from "./_PlatformFilter";

export const _PlatformFilters: _List_ = {
  type: "list",
  member: {
    shape: _PlatformFilter
  }
};
