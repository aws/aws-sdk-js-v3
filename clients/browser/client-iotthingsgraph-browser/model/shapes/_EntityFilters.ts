import { List as _List_ } from "@aws-sdk/types";
import { _EntityFilter } from "./_EntityFilter";

export const _EntityFilters: _List_ = {
  type: "list",
  member: {
    shape: _EntityFilter
  }
};
