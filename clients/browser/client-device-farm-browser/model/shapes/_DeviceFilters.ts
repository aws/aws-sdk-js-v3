import { List as _List_ } from "@aws-sdk/types";
import { _DeviceFilter } from "./_DeviceFilter";

export const _DeviceFilters: _List_ = {
  type: "list",
  member: {
    shape: _DeviceFilter
  }
};
